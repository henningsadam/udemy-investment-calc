import logo from './assets/investment-calculator-logo.png';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import { useState } from 'react';

function App() {
  const [tableData, setTableData] = useState({});

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // use like this:
  // formatter.format(yourValue);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    let totalInterest = 0;
    let totalContribution = 0;
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      totalContribution += yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: formatter.format(yearlyInterest),
        totalInterest: formatter.format(totalInterest),
        totalContribution: formatter.format(totalContribution),
        savingsEndOfYear: formatter.format(currentSavings),
        yearlyContribution: formatter.format(yearlyContribution),
      });
    }

    // do something with yearlyData ...
    setTableData(yearlyData);
  };

  return (
    <div>
      <Header logoUrl={logo} />
      <Form onSubmit={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {tableData.length > 0 ? (
        <Table data={tableData} />
      ) : (
        <p className='result'>No data to display</p>
      )}
    </div>
  );
}

export default App;
