'use client';
import { useState, useEffect } from 'react';

export default function ScoreDisplay() {
  const [goals, setGoals] = useState(0); // Default value
  const [clearedSwitches, setClearedSwitches] = useState(0); // Default value
  const [passes, setPasses] = useState(0); // Default value
  const [score, setScore] = useState(0); // Calculated score
  const [error, setError] = useState(''); // Error messages
  const [isTeamRule, setIsTeamRule] = useState(true); // Track active rule

  const resetFields = () => {
    setGoals(0);
    setClearedSwitches(0);
    setPasses(0);
    setError(''); // Clear any errors
    setScore(0); // Reset score to 0
  };

  // Calculate score based on the original rules
  const calculateScore = (goals, clearedSwitches, passes) => {
    if (clearedSwitches > 4) return 'Error: Max 4 cleared switches allowed.';
    if (clearedSwitches <= 0 && goals > 0)
      return 'At least 1 switch is cleared';
    if (passes > goals + 2) return 'Error: Passes cannot exceed Goals + 2.';
    if (passes > goals) passes = goals; // Adjust for rule: no points for extra passes.

    // Calculate base scores
    const goalPoints = goals * 1;
    const switchPoints = clearedSwitches * 1;

    // Calculate pass points
    let passPoints = 0;
    switch (clearedSwitches) {
      case 0:
        passPoints = passes * 1;
        break;
      case 1:
        passPoints = passes * 4;
        break;
      case 2:
        passPoints = passes * 8;
        break;
      case 3:
        passPoints = passes * 10;
        break;
      case 4:
        passPoints = passes * 12;
        break;
    }

    return goalPoints + switchPoints + passPoints;
  };

  // New rule: Calculate score without passes
  const calculateSkillsScore = (goals, clearedSwitches) => {
    if (clearedSwitches > 4) return 'Error: Max 4 cleared switches allowed.';
    if (clearedSwitches <= 0 && goals > 0)
      return 'At least 1 switch is cleared';

    // Calculate goal points based on the number of cleared switches
    let goalPoints = 0;
    switch (clearedSwitches) {
      case 0:
        goalPoints = goals * 4;
        break;
      case 1:
        goalPoints = goals * 8;
        break;
      case 2:
        goalPoints = goals * 10;
        break;
      case 3:
        goalPoints = goals * 12;
        break;
      case 4:
        goalPoints = goals * 12;
        break;
      default:
        goalPoints = 0;
    }

    // Calculate switch points


    return goalPoints + clearedSwitches;
  };

  useEffect(() => {
    let result;
    if (isTeamRule) {
      result = calculateScore(goals, clearedSwitches, passes);
    
    } else {
      result = calculateSkillsScore(goals, clearedSwitches);
    }

    if (typeof result === 'string') {
      setError(result);
      setScore(0);
    } else {
      setError('');
      setScore(result);
    }
  }, [goals, clearedSwitches, passes, isTeamRule]); // Dependencies: recalculate when any of these changes

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="flex justify-between w-full max-w-md">
        <button
          onClick={() => {
            setIsTeamRule(!isTeamRule), resetFields();
          }}
          className="px-4 py-2 mb-4 bg-gray-700 text-white rounded-md hover:bg-gray-600"
        >
          Toggle Rule Set
        </button>
      </div>
      {isTeamRule ? (
        <h1 className="text-4xl font-bold mb-8">VEX IQ Rapid Relay Alliance</h1>
      ) : (
        <h1 className="text-4xl font-bold mb-8">VEX IQ Skills Challenge</h1>
      )}

      <div className="space-y-10 w-full max-w-md">
        <div>
          <label className="block text-lg font-medium mb-2">Goals:</label>
          <input
            type="number"
            value={goals}
            onChange={(e) => setGoals(Number(e.target.value))}
            className="w-full p-2 text-black bg-white rounded"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">
            Cleared Switches:
          </label>
          <input
            type="number"
            value={clearedSwitches}
            onChange={(e) => setClearedSwitches(Number(e.target.value))}
            className="w-full p-2 text-black bg-white rounded"
          />
        </div>
        {isTeamRule && (
          <div>
            <label className="block text-lg font-medium mb-2">Passes:</label>
            <input
              type="number"
              value={passes}
              onChange={(e) => setPasses(Number(e.target.value))}
              className="w-full p-2 text-black bg-white rounded"
            />
          </div>
        )}
      </div>
      <div>
        <button
          onClick={resetFields}
          className="mt-4 mb-5 px-4 py-2 border-2 rounded-full text-white hover:bg-gray-500"
        >
          Clear Fields
        </button>
      </div>

      <div className="mt-6">
        {error ? (
          <p className="text-red-500 text-lg">{error}</p>
        ) : (
          <p className="text-4xl">
            <strong>Score:</strong> {score}
          </p>
        )}
      </div>
    </div>
  );
}
