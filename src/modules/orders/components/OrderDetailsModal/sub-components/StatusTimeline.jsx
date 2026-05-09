import React from "react";
import * as S from "../OrderDetailModal.styles";

const StatusTimeline = ({ shippingHistory, orderHistory }) => {
  const combinedHistory = [
    ...(shippingHistory || []),
    ...(orderHistory || []),
  ].sort((a, b) => new Date(b.at) - new Date(a.at));

  return (
    <S.BottomRow>
      <S.SectionTitle>Status History</S.SectionTitle>
      <S.Timeline>
        {combinedHistory.map((log, i) => (
          <S.TimelineItem key={`${log.status}-${i}`}>
            <div className="dot" />
            <div className="content">
              <div className="status">{log.status}</div>
              <div className="time">
                {new Date(log.at).toLocaleString("en-IN")} • by{" "}
                {log.by}
              </div>
            </div>
          </S.TimelineItem>
        ))}
        {combinedHistory.length === 0 && (
          <div
            style={{ color: "var(--muted)", fontSize: "12px" }}
          >
            No history logs available yet.
          </div>
        )}
      </S.Timeline>
    </S.BottomRow>
  );
};

export default StatusTimeline;
