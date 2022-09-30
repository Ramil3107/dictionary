import { Box, Grid } from "@mui/material"
import { WordCard } from "./WordCard"

export const Words = ({ words }) => {
    return (
        <Box sx={{ width: "100%" }}>
            <Grid container>
                {
                    words?.map(word => {
                        return (
                            <Grid
                                key={word.en}
                                xs={12} md={6} sm={12} lg={4}
                                item
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <WordCard word={word} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}
