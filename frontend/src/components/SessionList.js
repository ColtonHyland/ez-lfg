import './SessionList.scss';
import SessionListItem from './SessionListItem';

function SessionList({ gameCover, sessions, userId }) {
  const sessionCards = sessions.map(session => (
    <SessionListItem key={session.id} session={session} userId={userId} />
  ));

  return (
    <div className="sessions-container">
      {sessionCards}
    </div>
  );
}

export default SessionList;