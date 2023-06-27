import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Navigation({ collections, handleScroll }) {

  return (
    <AppBar position="static" className="nav-header">
      <Toolbar>
         <Link href="/" passhref="true" className="nav-link">
          <div className="flex justify-center items-center mx-auto py-4">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="#eaedf0"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
        </Link>
        <Link href="#ProductsSection" className="nav-link" underline="none" color="inherit" onClick={ handleScroll }>
          <Typography mr={2}>All Products</Typography>
        </Link>
        <Link href="/contact" className="nav-link" underline="none" color="inherit">
          <Typography mr={2}>Contact</Typography>
        </Link>
        <Link href="/about" className="nav-link" underline="none" color="inherit">
          <Typography mr={2}>About</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}