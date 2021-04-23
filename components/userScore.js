function UserScore() {
  const score = {
    t1: 1,
    t2: 2,
    t3: 1,
    t4: 1,
    t5: 1,
    t6: 1,
    t7: 1,
    t8: 1,
    t9: 0,
    b1: 1,
    b2: 1,
    b3: 1,
    b4: 1,
    b5: 1,
    b6: 1,
    b7: 1,
    b8: 1,
    b9: 0,
  };
  return (
    <div>
      <table id="score" className="border-2 w-full">
        <tr>
          <th>1st</th>
          <th>2nd</th>
          <th>3rd</th>
          <th>4th</th>
          <th>5th</th>
          <th>6th</th>
          <th>7th</th>
          <th>8th</th>
          <th>9th</th>
        </tr>
        <tr>
          <td className="border-2  pl-1">{score.t1}</td>
          <td className="border-2  pl-1">{score.t2}</td>
          <td className="border-2  pl-1">{score.t3}</td>
          <td className="border-2  pl-1">{score.t4}</td>
          <td className="border-2  pl-1">{score.t5}</td>
          <td className="border-2  pl-1">{score.t6}</td>
          <td className="border-2  pl-1">{score.t7}</td>
          <td className="border-2  pl-1">{score.t8}</td>
          <td className="border-2  pl-1">{score.t9}</td>
        </tr>
        <tr>
          <td className="border-2  pl-1">{score.b1}</td>
          <td className="border-2  pl-1">{score.b2}</td>
          <td className="border-2  pl-1">{score.b3}</td>
          <td className="border-2  pl-1">{score.b4}</td>
          <td className="border-2  pl-1">{score.b5}</td>
          <td className="border-2  pl-1">{score.b6}</td>
          <td className="border-2  pl-1">{score.b7}</td>
          <td className="border-2  pl-1">{score.b8}</td>
          <td className="border-2  pl-1">{score.b9}</td>
        </tr>
      </table>
    </div>
  );
}

export default UserScore;
