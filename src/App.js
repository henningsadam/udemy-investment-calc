import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import { useState } from 'react';

function App() {
  const [tableData, setTableData] = useState(null);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // use like this:
  // formatter.format(yourValue);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    if (userInput) {
      let currentSavings = +userInput['current-savings'];
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
    }

    setTableData(yearlyData);
  };

  return (
    <div>
      <Header />
      <Form onSubmit={calculateHandler} />
      {tableData ? <Table data={tableData} /> : <p style={{textAlign: 'center'}}>No data to display. Enter some data above to get started!</p>}
    </div>
  );
}

export default App;
