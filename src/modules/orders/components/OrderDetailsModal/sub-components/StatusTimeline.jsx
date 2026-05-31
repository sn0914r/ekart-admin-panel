import React from "react";
import * as S from "../OrderDetailModal.styles";

const StatusTimeline = ({ timeline }) => {
  const history = [...(timeline || [])].sort((a, b) => new Date(b.at) - new Date(a.at));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <S.BottomRow>
      <S.SectionTitle>Status History</S.SectionTitle>
      <S.Timeline>
        {history.map((log, i) => (
          <S.TimelineItem 
            key={`${log.status}-${i}`} 
            $isCurrent={i === 0} 
            $status={log.status}
          >
            <div className="dot" />
            <div className="content">
              <div className="status">{log.label || log.status}</div>
              <div className="time">{formatDate(log.at)}</div>
            </div>
          </S.TimelineItem>
        ))}
        {history.length === 0 && (
          <div style={{ color: "var(--muted)", fontSize: "12px" }}>
            No history logs available yet.
          </div>
        )}
      </S.Timeline>
    </S.BottomRow>
  );
};

export default StatusTimeline;
