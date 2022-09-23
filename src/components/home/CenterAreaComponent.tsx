import {
  BreakandRunLeftState,
  BreakandRunRightState,
  ConsecutiveBreakandRunLeftState,
  ConsecutiveBreakandRunRightState,
  LongestGameWinningStreakLeftState,
  LongestGameWinningStreakRightState,
} from "../../global/globalState";
import { RecordItem } from "./common/RecordItem";

export const CenterAreaComponent = () => {
  return (
    <>
      <br />
      <br />
      <RecordItem
        title="Break and Run"
        leftState={BreakandRunLeftState}
        rightState={BreakandRunRightState}
      />
      <RecordItem
        title="Consecutive Break and Runs"
        leftState={ConsecutiveBreakandRunLeftState}
        rightState={ConsecutiveBreakandRunRightState}
        hasPercent
      />
      <br />
      <RecordItem
        title="Longest Game Winning Streak"
        leftState={LongestGameWinningStreakLeftState}
        rightState={LongestGameWinningStreakRightState}
      />
      <br />
    </>
  );
};
