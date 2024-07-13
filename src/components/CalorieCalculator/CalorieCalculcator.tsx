import { ChangeEvent, useState } from "react";
import "./CalorieCalculcator.css";

const CalorieCalculcator = () => {
  const [bodysize, setBodysize] = useState<number>();
  const [age, setAge] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [activity, setActivity] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [bmr, setBmr] = useState<number | null>(null);
  const [totalDailyEnergy, setTotalDailyEnergy] = useState<number | null>(null);

  const handleGender = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const calculateGrundumsatz = () => {
    if (bodysize && weight && age) {
      let grundumsatz = 0;
      if (gender === "male") {
        grundumsatz = 66.47 + 13.7 * weight + 5 * bodysize - 6.8 * age;
      } else if (gender === "female") {
        grundumsatz = 65.51 + 9.6 * weight + 1.8 * bodysize - 4.7 * age;
      }
      const totalDailyEnergyValue = grundumsatz * Number(activity);
      setBmr(grundumsatz);
      setTotalDailyEnergy(totalDailyEnergyValue);
    }
  };

  return (
    <div className="calculator-div" id="calorieCalculator">
      <h2>Test your daily Calorie Requirement</h2>
      <p>
        To determine your daily calorie requirement, we need some information
        about your age, gender, weight, height and activity level. Enter this
        information to calculate your individual requirements.
      </p>

      <div className="calculator-wrapper">
        <div className="input-fields">
          <div className="wrapper">
            <div className="input-wrapper">
              <label htmlFor="bodysize">Body size (in cm):</label>
              <input
                type="number"
                id="bodysize"
                name="bodysize"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setBodysize(Number(event.target.value))
                }
                value={bodysize}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setAge(Number(event.target.value))
                }
                value={age}
                required
              />
            </div>
          </div>
          <div className="wrapper">
            <div className="input-wrapper">
              <label htmlFor="weight">Weight:</label>
              <input
                type="number"
                id="weight"
                name="weight"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setWeight(Number(event.target.value))
                }
                value={weight}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="activity">Activity:</label>
              <select
                name="activity"
                id=""
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  setActivity(event.target.value)
                }
                value={activity}
                required>
                <option value="">Wähle eine Aktivität aus</option>
                <option value="0.95">Schlafen</option>
                <option value="1.2">Nur Sitzen oder Liegen</option>
                <option value="1.5">
                  Ausschließlich sitzende Tätigkeit mit wenig oder keiner
                  körperlichen Aktivität in der Freizeit, z.B. Büroarbeit
                </option>
                <option value="1.7">
                  Sitzende Tätigkeit mit zeitweilig gehender oder stehender
                  Tätigkeit, z.B. Studierende, Fließbandarbeitende,
                  LAborfachkräfte, Berufskraftfahrende
                </option>
                <option value="1.9">
                  Überwiegend gehende oder stehende Tätigkeit, z.B.
                  Verkäufer:innen, Kellner:innen, Handwerker:innen,
                  Mechaniker:innen
                </option>
                <option value="2.2">
                  Körperlich anstrengende berufliche Arbeit
                </option>
              </select>
            </div>
          </div>
        </div>
        <h6>Gender</h6>
        <section className="gender">
          <div>
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={handleGender}
              />
              Male
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={handleGender}
              />
              Female
            </label>
          </div>
        </section>
        <button className="calculate-btn" onClick={calculateGrundumsatz}>
          Calculate
        </button>

        <hr />
        <div className="output-field">
          <table className="result-table">
            <thead>
              <tr>
                <th></th>
                <th>kcal/day</th>
                <th>kJ/day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basal Metabolic Rate</td>
                <td>{bmr !== null ? bmr.toFixed(2) : "-"}</td>
                <td>{bmr !== null ? (bmr * 4.184).toFixed(2) : "-"}</td>
              </tr>
              <tr>
                <td>Total Daily Energy</td>
                <td>
                  {totalDailyEnergy !== null
                    ? totalDailyEnergy.toFixed(2)
                    : "-"}
                </td>
                <td>
                  {totalDailyEnergy !== null
                    ? (totalDailyEnergy * 4.184).toFixed(2)
                    : "-"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculcator;
