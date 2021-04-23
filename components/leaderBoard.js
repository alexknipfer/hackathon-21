function LeaderBoard() {
  const leaderBoad = [
    { userName: "Josh", score: "5" },
    { userName: "Alex", score: "4" },
    { userName: "Scott", score: "4" },
    { userName: "Pat", score: "3" },
    { userName: "Ted", score: "1" },
  ];
  return (
    <div>
      <table id="score" className="border-2 w-full">
        {leaderBoad.map((user) => {
          return (
            <tr>
              <td className="border-2  pl-1">{user.userName}</td>
              <td className="border-2  pl-1">{user.score}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default LeaderBoard;
