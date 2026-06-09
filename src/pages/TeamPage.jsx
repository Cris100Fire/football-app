import { useParams, Link } from "react-router-dom";
import { useTeamDetail } from "../hooks/useTeamDetail";
import styles from "../styles/pages/Teampage.module.css";
import TeamDetail from "../components/teams/TeamDetail";
import Spinner from "../components/ui/Spinner";
import ErrorMessage from "../components/ui/ErrorMessage";

export default function TeamPage() {
  const { id } = useParams();
  const { team, loading, error } = useTeamDetail(id);

  return (
    <div className={styles.page}>
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && team && <TeamDetail team={team} />}
    </div>
  );
}
