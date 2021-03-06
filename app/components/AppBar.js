// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import { fade } from '@material-ui/core/styles/colorManipulator';
// import { withStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';

// const styles = theme => ({
//   root: {
//     width: '100%'
//   },
//   grow: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   },
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block'
//     }
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25)
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing.unit,
//       width: 'auto'
//     }
//   },
//   searchIcon: {
//     width: theme.spacing.unit * 9,
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   inputRoot: {
//     color: 'inherit',
//     width: '100%'
//   },
//   inputInput: {
//     paddingTop: theme.spacing.unit,
//     paddingRight: theme.spacing.unit,
//     paddingBottom: theme.spacing.unit,
//     paddingLeft: theme.spacing.unit * 10,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: 120,
//       '&:focus': {
//         width: 200
//       }
//     }
//   }
// });

// class SearchAppBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handleSearchChange = this.handleSearchChange.bind(this);
//   }

//   handleSearchChange(e) {
//     const { onSearchChange } = this.props;
//     onSearchChange(e.target.value);
//   }

//   render() {
//     const { classes, search } = this.props;
//     return (
//       <div className={classes.root}>
//         <AppBar position="fixed" color="secondary">
//           <Toolbar>
//             <IconButton
//               className={classes.menuButton}
//               color="inherit"
//               aria-label="Open drawer"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               className={classes.title}
//               variant="h6"
//               color="inherit"
//               noWrap
//             >
//               SFDX Org Manager
//             </Typography>
//             <div className={classes.grow} />
//             <div className={classes.search}>
//               <div className={classes.searchIcon}>
//                 <SearchIcon />
//               </div>
//               <InputBase
//                 placeholder="Search…"
//                 classes={{
//                   root: classes.inputRoot,
//                   input: classes.inputInput
//                 }}
//                 onChange={this.handleSearchChange}
//                 value={search}
//               />
//             </div>
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }

// SearchAppBar.defaultProps = {
//   search: ''
// };

// SearchAppBar.propTypes = {
//   search: PropTypes.string,
//   onSearchChange: PropTypes.func.isRequired,
//   classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
// };

// export default withStyles(styles)(SearchAppBar);
