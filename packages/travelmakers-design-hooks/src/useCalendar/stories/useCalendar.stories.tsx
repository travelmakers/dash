import { useCalendar } from "../useCalendar";

export default {
  title: "@travelmakers/hooks/useCalendar",
};

export const Default = () => {
  const [state, actions] = useCalendar(null, {
    events: [
      {
        startDate: new Date(2023, 4, 27),
        endDate: new Date(2023, 4, 27),
        note: "Meeting with clients",
      },
      {
        startDate: new Date(2023, 4, 22),
        endDate: new Date(2023, 4, 25),
        note: "Vacation",
      },
    ],
  });
  console.log(state);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td colSpan={5} style={{ textAlign: "center" }}>
              <strong>
                {state.month} - {state.year}
              </strong>
            </td>
            <td colSpan={2} style={{ textAlign: "right" }}>
              <button onClick={() => actions.getPrevMonth()}>&lt;</button>
              <button onClick={() => actions.getNextMonth()}>&gt;</button>
            </td>
          </tr>
          <tr>
            {state.days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {state.weeks.map((week, index) => (
            <tr key={index}>
              {week.map((day) => (
                <td
                  key={day.dayOfMonth}
                  style={{
                    textAlign: "center",
                    backgroundColor: day.isToday ? "#ff0" : "#fff",
                    color: "black",
                  }}
                >
                  {day.dayOfMonth}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
