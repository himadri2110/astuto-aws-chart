import { useState } from "react";
import { LuThumbsDown, LuThumbsUp } from "react-icons/lu";

export const Feedback = () => {
  const [feebackGiven, setFeedbackGiven] = useState(null);

  return (
    <div className="flex gap-2 items-center justify-center text-slate-500 font-medium">
      {feebackGiven ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <>
          <p>Have the answers been satisfactory so far?</p>

          <p className="flex gap-2">
            <button onClick={() => setFeedbackGiven("positive")}>
              <LuThumbsUp />
            </button>

            <button onClick={() => setFeedbackGiven("negative")}>
              <LuThumbsDown />
            </button>
          </p>
        </>
      )}
    </div>
  );
};
