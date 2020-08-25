import React from 'react';
import { Link } from 'react-router-dom';
import {
    Hidden,
    Drawer,
    List,
    ListItemText,
    ListItem,
    Divider,
    makeStyles,
    Theme,
    ListItemIcon
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

/**
 * App drawer properties
 */
interface AppDrawerProps {
    /**
     * Drawer width
     */
    drawerWidth: number;

    /**
     * Title
     */
    title?: string;
}

// Make styles
const useStyles = makeStyles<Theme, { drawerWidth: number }>((theme) => ({
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: ({ drawerWidth }) => `${drawerWidth}px`,
            flexShrink: 0
        }
    },
    list: {
        width: ({ drawerWidth }) => `${drawerWidth}px`
    }
}));

/**
 * AppDrawer ref interface
 */
export interface AppDrawerRef {
    /**
     * Open it
     */
    open(): void;
}

/**
 * App drawer
 */
export const AppDrawer = React.forwardRef<AppDrawerRef, AppDrawerProps>(
    (props, ref) => {
        // Destruct
        const { drawerWidth, title } = props;

        // Style
        const classes = useStyles({ drawerWidth });

        // Open state
        const [open, updateOpen] = React.useState(false);

        // Public methods through ref
        React.useImperativeHandle(ref, () => ({
            /**
             * Open it
             */
            open() {
                updateOpen(true);
            }
        }));

        // Close
        const onClose = () => {
            updateOpen(false);
        };

        // Menu items
        const menuItems = (
            <List className={classes.list} onClick={onClose}>
                <ListItem>
                    <ListItemText primary={title} />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/main">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </List>
        );

        return (
            <>
                <Hidden lgUp>
                    <Drawer anchor="left" open={open} onClose={onClose}>
                        {menuItems}
                    </Drawer>
                </Hidden>
                <Hidden mdDown>
                    <nav className={classes.drawer}>
                        <Drawer anchor="left" variant="permanent">
                            {menuItems}
                        </Drawer>
                    </nav>
                </Hidden>
            </>
        );
    }
);
