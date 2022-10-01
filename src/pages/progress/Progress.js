import { Box } from "@mui/material";
import { useSelector } from "react-redux"
import { StatsItems } from "./components/StatsItems"
import { StatsTitles } from "./components/StatsTitles"
import { TotalStats } from "./components/TotalStats"

export const Progress = () => {

  const { history } = useSelector(state => state.dictionary)

  const styles = {
    wrapper: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
    }
  }

  return (
    <Box sx={styles.wrapper}>
      <TotalStats history={history} />
      <StatsTitles />
      <StatsItems history={history} />
    </Box>
  )
}
