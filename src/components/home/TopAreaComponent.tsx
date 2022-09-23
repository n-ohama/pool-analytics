import {
  BallMadeOnBreakLeftState,
  BallMadeOnBreakRightState,
  DryBreakCountLeftState,
  DryBreakCountRightState,
  ScoreLeftState,
  ScoreRightState,
  ScratchLeftState,
  ScratchRightState,
  ShotAfterBreakLeftState,
  ShotAfterBreakRightState,
  TotalBreaksLeftState,
  TotalBreaksRightState,
} from "../../global/globalState";
import { RecordItem } from "./common/RecordItem";

export const TopAreaComponent = () => {
  return (
    <>
      <RecordItem
        title="Game Score"
        leftState={ScoreLeftState}
        rightState={ScoreRightState}
      />
      <RecordItem
        title="Total Break"
        leftState={TotalBreaksLeftState}
        rightState={TotalBreaksRightState}
      />
      <RecordItem
        title="Dry Breaks"
        leftState={DryBreakCountLeftState}
        rightState={DryBreakCountRightState}
        hasPercent
      />
      <RecordItem
        title="Scratches on Break"
        leftState={ScratchLeftState}
        rightState={ScratchRightState}
        hasPercent
      />
      <RecordItem
        title="Ball Made on Break"
        leftState={BallMadeOnBreakLeftState}
        rightState={BallMadeOnBreakRightState}
        hasPercent
      />
      <RecordItem
        title="Shot After The Break"
        leftState={ShotAfterBreakLeftState}
        rightState={ShotAfterBreakRightState}
        hasPercent
      />
    </>
  );
};
