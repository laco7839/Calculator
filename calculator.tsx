import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op) => {
    setEquation(display + ' ' + op + ' ');
    setNewNumber(true);
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
      setNewNumber(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setNewNumber(true);
  };

  const Button = ({ children, onClick, className }) => (
    <button
      onClick={onClick}
      className={`p-4 text-lg font-medium rounded-2xl transition-all duration-200 shadow-lg 
      active:scale-95 active:shadow-md ${className}`}
    >
      {children}
    </button>
  );

  return (
    <Card className="w-96 bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-3xl shadow-xl border border-white/50">
      <CardContent>
        <div className="mb-6 bg-white/30 backdrop-blur-md p-4 rounded-2xl shadow-inner">
          <div className="text-gray-600 text-right h-6 text-sm font-medium">{equation}</div>
          <div className="text-4xl text-right font-bold truncate text-gray-800">{display}</div>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          <Button 
            onClick={handleClear}
            className="bg-gradient-to-r from-red-400 to-red-500 text-white hover:from-red-500 hover:to-red-600 col-span-2"
          >
            Clear
          </Button>
          <Button 
            onClick={() => handleOperator('/')}
            className="bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600"
          >
            ÷
          </Button>
          <Button 
            onClick={() => handleOperator('*')}
            className="bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600"
          >
            ×
          </Button>
          
          {[7, 8, 9].map((num) => (
            <Button
              key={num}
              onClick={() => handleNumber(String(num))}
              className="bg-white/50 hover:bg-white/80 text-gray-700"
            >
              {num}
            </Button>
          ))}
          <Button 
            onClick={() => handleOperator('-')}
            className="bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600"
          >
            −
          </Button>
          
          {[4, 5, 6].map((num) => (
            <Button
              key={num}
              onClick={() => handleNumber(String(num))}
              className="bg-white/50 hover:bg-white/80 text-gray-700"
            >
              {num}
            </Button>
          ))}
          <Button 
            onClick={() => handleOperator('+')}
            className="bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600"
          >
            +
          </Button>
          
          {[1, 2, 3].map((num) => (
            <Button
              key={num}
              onClick={() => handleNumber(String(num))}
              className="bg-white/50 hover:bg-white/80 text-gray-700"
            >
              {num}
            </Button>
          ))}
          <Button 
            onClick={handleEqual}
            className="bg-gradient-to-r from-green-400 to-green-500 text-white hover:from-green-500 hover:to-green-600 row-span-2"
          >
            =
          </Button>
          
          <Button
            onClick={() => handleNumber('0')}
            className="bg-white/50 hover:bg-white/80 text-gray-700 col-span-2"
          >
            0
          </Button>
          <Button
            onClick={() => handleNumber('.')}
            className="bg-white/50 hover:bg-white/80 text-gray-700"
          >
            .
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Calculator;