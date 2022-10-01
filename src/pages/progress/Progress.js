import { Check, Close, Visibility } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
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
