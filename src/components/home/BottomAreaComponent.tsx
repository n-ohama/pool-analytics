import {
  BallsMissedLeftState,
  BallsMissedRightState,
  BallsPocketedLeftState,
  BallsPocketedRightState,
  KickingErrorsLeftState,
  KickingErrorsRightState,
  SafeteyErrorsLeftState,
  SafeteyErrorsRightState,
  UnforcedErrorsLeftState,
  UnforcedErrorsRightState,
} from "../../global/globalState";
import { RecordItem } from "./common/RecordItem";
import { RecordWithoutButtonItem } from "./common/RecordWithoutButtonItem";

export const BottomAreaComponent = () => {
  return (
    <>
      {/* <RecordWithoutButtonItem title="In Game Stats" />
      <RecordWithoutButtonItem title="0" /> */}
      <RecordItem
        title="Balls Pocketed"
        leftState={BallsPocketedLeftState}
        rightState={BallsPocketedRightState}
      />
      <RecordItem
        title="Balls Missed"
        leftState={BallsMissedLeftState}
        rightState={BallsMissedRightState}
        hasPercent
      />
      <RecordItem
        title="Unforced Errors"
        leftState={UnforcedErrorsLeftState}
        rightState={UnforcedErrorsRightState}
        hasPercent
      />
      <RecordItem
        title="Safety Errors"
        leftState={SafeteyErrorsLeftState}
        rightState={SafeteyErrorsRightState}
        hasPercent
      />
      <RecordItem
        title="Kicking Errors"
        leftState={KickingErrorsLeftState}
        rightState={KickingErrorsRightState}
        hasPercent
      />
      <br />
      {/* <RecordWithoutButtonItem title="ACCU-STAT" /> */}
    </>
  );
};
