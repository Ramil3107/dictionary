import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import {
    AddCircle, AddCircleOutline, Book, BookOutlined,
    InsertChart, InsertChartOutlined, School, SchoolOutlined
} from "@mui/icons-material"
import { useLocation, useNavigate } from "react-router-dom"

export const NavItems = () => {

    const styles = {
        listItemIcon: {
            ml: 1
        },
        listItem: {
            display: "flex",
            flexWrap: "wrap",
            pb: 2,
            pt: 2
        },
        listItemActive: {
            borderLeft: "5px black solid",
            display: "flex",
            flexWrap: "wrap",
            pb: 2,
            pt: 2,
            bgcolor: "rgb(250 240 225)"
        },
        listIcon: {
            color: "black",
            fontSize: 35,
        }
    }

    const listItems = [
        {
            text: "My Dictionary",
            defaultIcon: <BookOutlined sx={styles.listIcon} />,
            activeIcon: <Book sx={styles.listIcon} />,
            path: "/"
        },
        {
            text: "Add Words",
            defaultIcon: <AddCircleOutline sx={styles.listIcon} />,
            activeIcon: <AddCircle sx={styles.listIcon} />,
            path: "addwords"
        },
        {
            text: "Practice",
            defaultIcon: <SchoolOutlined sx={styles.listIcon} />,
            activeIcon: <School sx={styles.listIcon} />,
            path: "practice"
        },
        {
            text: "Progress",
            defaultIcon: <InsertChartOutlined sx={styles.listIcon} />,
            activeIcon: <InsertChart sx={styles.listIcon} />,
            path: "progress"
        },

    ]

    const navigate = useNavigate()
    const location = useLocation().pathname

    return (
        <List >
            {
                listItems.map(item => {
                    return (
                        <ListItem
                            button
                            onClick={() => navigate(item.path)}
                            sx={location === item.path ? styles.listItemActive : styles.listItem}>
                            <ListItemIcon sx={styles.listItemIcon}>
                                {location === item.path ? item.activeIcon : item.defaultIcon}
                            </ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}
