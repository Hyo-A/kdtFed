import { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// 얘는 a태그같은 역할을 할 수 있음

const Nav = styled(motion.div)`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  /* background: ${({ theme }) => theme.black.veryDark}; */
  color: ${({ theme }) => theme.blue};
  font-size: 1.8rem;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Logo = styled(motion.svg)`
  width: 95px;
  height: 60px;
  fill: ${({ theme }) => theme.blue};
  path {
    stroke-width: 4px;
    stroke: ${({ theme }) => theme.blue};
  }
  cursor: pointer;
`;

const Items = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  transition: opacity 0.3s;
  cursor: pointer;
  position: relative;
  &:hover {
    opacity: 0.7;
  }
`;

const Circle = styled(motion.span)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  left: 0;
  right: 0;
  bottom: -6px;
  margin: 0 auto;
  background: ${({ theme }) => theme.blue};
  position: absolute;
`;

const Search = styled.form`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Magnifying = styled(motion.svg)`
  width: 18px;
  /* fill: ${({ theme }) => theme.white.lighter}; */
  cursor: pointer;
`;

const Input = styled(motion.input)`
  transform-origin: right center;
  width: 160px;
  height: 26px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.white.darker};
  margin-right: 10px;
  &::placeholder {
    font-size: 1rem;
    opacity: 1;
    padding: 10px;
  }
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;

const logoVariants = {
  normal: { fillOpacity: 1 },
  active: {
    fillOpacity: [0, 0.5, 0, 0.7, 0.2, 0, 1, 0],
    scale: [1, 0.7, 1],
    transition: {
      repeat: Infinity,
    },
  },
};

interface IForm {
  keyword: string;
}

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();
  const magAnimation = useAnimation();
  const main = useNavigate();
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onvalid = (data: IForm) => {
    main(`/search?keyword=${data.keyword}`);
    setValue("keyword", "");
  };

  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
      magAnimation.start({
        x: 160,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
      magAnimation.start({
        x: 0,
      });
    }
    setSearchOpen((prev) => !prev);
  };

  const gotomain = () => {
    main("/");
  };

  const homeMatch = useMatch("/");
  const tvMatch = useMatch("/tv");
  const movieMatch = useMatch("/movie");
  // tv라는 페이지에 들어오면 truthy한 값을 반환
  const modalMatch = useMatch("/movies/*");

  const { scrollY } = useScroll();

  const theme = useTheme();

  const navVariants = {
    top: { background: "rgba(0,0,0,1)", color: theme.white.darker },
    scroll: { background: "#ffffff", color: theme.blue },
  };

  const magVariants = {
    top: { fill: theme.white.darker },
    scroll: { fill: theme.blue },
  };

  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
        magAnimation.start("scroll");
      } else {
        navAnimation.start("top");
        magAnimation.start("top");
      }
    });
  }, [scrollY]);
  // console.log(scrollY);

  return (
    <Nav
      variants={navVariants}
      animate={navAnimation}
      initial={{
        background: "rgba(0,0,0,1)",
        color: "#fff",
      }}
    >
      <Col>
        <Logo
          onClick={gotomain}
          variants={logoVariants}
          initial="normal"
          whileHover="active"
          width="1024"
          height="466"
          viewBox="-10.62993 -10.62993 825.42186 375.59086"
        >
          <path d="m 703.971,161.294 c -2.323,-19.334 -16.742,-33.492 -35.522,-33.492 -21.079,0 -33.769,12.992 -38.394,33.492 l 73.916,0 z M 550.349,177.17 c 0,-24.824 -10.958,-45.625 -33.487,-45.891 -24.536,-0.3 -33.77,21.936 -33.77,45.891 0,21.649 8.087,46.765 33.77,46.765 26.84,-0.283 33.487,-27.138 33.487,-46.765 z m 193.461,-9.821 c 0,-34.652 -27.719,-68.997 -76.22,-68.997 -41.383,0 -68.819,22.632 -77.036,58.315 -7.218,-39.497 -34.073,-58.315 -64.165,-58.315 -20.494,0 -37.525,8.667 -44.463,26.563 l -0.562,0 0,-6.636 c 0,-12.985 -6.64,-19.927 -19.073,-19.927 -9.101,0 -14.736,3.494 -17.323,10.004 -3.033,-5.082 -8.789,-10.004 -18.765,-10.004 -11.558,0 -17.312,8.082 -20.208,18.763 l -25.697,95.57 -0.579,0 -27.136,-98.446 c -2.588,-9.539 -10.392,-15.887 -21.658,-15.887 -7.891,0 -14.718,4.312 -18.14,10.845 -3.543,-6.451 -10.804,-10.845 -17.692,-10.845 -6.339,0 -11.827,3.464 -16.146,8.082 l -46.777,51.97 0,-95.841 c 0,-13.865 -8.371,-21.076 -21.07,-21.076 -12.705,0 -21.069,7.211 -21.069,21.076 l 0,131.676 c -6.867,-20.057 -30.3,-28.033 -50.525,-32.669 l -17.597,-4.026 c -13.003,-2.898 -22.5242,-5.198 -22.5242,-15.022 0,-8.955 9.5212,-12.986 24.2452,-12.986 26.558,0 27.144,19.345 43.586,19.345 10.982,0 17.629,-8.671 17.629,-18.471 0,-19.343 -32.345,-32.058 -64.384,-32.058 -29.1621,0 -63.2271,12.715 -63.2271,47.06 0,28.299 19.0551,38.404 43.5911,44.47 l 24.834,6.045 c 15.012,3.755 24.24,5.489 24.24,16.163 0,8.662 -9.521,15.322 -24.553,15.322 -31.1492,0 -32.8875,-25.996 -51.0809,-25.996 -11.8407,0 -17.0312,8.379 -17.0312,17.618 0,20.781 31.753,37.816 69.8651,37.816 27.172,0 55.356,-11.684 62.932,-36.586 l 0,15.507 c 0,13.858 8.364,21.079 21.069,21.079 12.699,0 21.07,-7.221 21.07,-21.079 l 0,-32.05 14.736,-12.989 39.827,56.289 c 3.178,4.634 8.667,9.829 19.052,9.829 11.255,0 19.917,-9.829 19.917,-20.503 0,-6.933 -2.873,-11.552 -4.326,-13.563 L 277.5,163.881 308.681,131.279 c 1.279,-1.402 2.408,-2.57 3.361,-3.82 0.848,2.836 2.042,6.23 3.594,10.737 l 43.883,124.997 c -3.192,13.008 -9.257,13.292 -14.744,13.292 l -4.319,0 c -11.262,0 -19.336,5.766 -19.336,17.031 0,10.098 7.788,19.345 26.54,19.345 26.583,0 38.125,-15.02 48.235,-43.881 l 47.359,-134.266 0,157.083 c 0,13.843 8.374,21.064 21.069,21.064 12.706,0 21.055,-7.221 21.055,-21.064 l 0,-56.318 0.606,0 c 7.792,13.564 22.216,21.371 41.562,21.371 36.113,0 56.425,-24.965 62.778,-56.02 7.129,29.619 30.767,56.02 78.706,56.02 25.4,0 66.124,-11.845 66.124,-37.24 0,-7.804 -7.218,-16.465 -17.33,-16.465 -17.036,0 -17.036,20.79 -48.794,20.79 -24.531,0 -38.975,-16.171 -38.975,-38.403 l 95.279,0 c 14.15,0 18.476,-3.742 18.476,-18.183 z m 13.116,-65.982 0,26.525 5.454,0 0,-18.595 0.08,0 6.514,18.595 4.507,0 6.509,-18.796 0.06,0 0,18.796 5.488,0 0,-26.525 -8.232,0 -5.884,18.254 -0.06,0 -6.22,-18.254 -8.218,0 z m -16.851,4.89 0,21.635 5.869,0 0,-21.635 7.95,0 0,-4.89 -21.778,0 0,4.89 7.959,0 z M 775.3,152.2 c 1.504,7.456 2.309,15.161 2.309,23.046 0,63.826 -51.748,115.594 -115.58,115.594 -24.029,0 -46.363,-7.344 -64.84,-19.902 -16.254,14.551 -37.621,23.457 -61.138,23.457 -4.326,0 -8.554,-0.391 -12.734,-0.977 -5.781,27.148 -29.878,47.529 -58.76,47.529 -23.086,0 -43.104,-13.027 -53.168,-32.129 -8.832,26.436 -33.74,45.513 -63.118,45.513 -29.026,0 -53.634,-18.594 -62.759,-44.513 -0.778,0.03 -1.526,0.133 -2.292,0.133 -31.756,0 -59.788,-15.556 -77.19,-39.355 -19.324,13.643 -42.894,21.709 -68.374,21.709 -65.5125,0 -118.6009,-53.112 -118.6009,-118.624 0,-3.659 0.1661,-7.292 0.5054,-10.856 C 7.5806,151.862 0,136.165 0,118.64 0,85.586 26.814,58.786 59.8633,58.786 c 10.2515,0 19.8731,2.576 28.3129,7.115 15.0658,-6.934 31.8008,-10.838 49.4798,-10.838 6.061,0 12.045,0.462 17.846,1.333 -0.02,-0.693 -0.09,-1.363 -0.09,-2.073 0,-30.01 24.321,-54.323 54.339,-54.323 29.829,0 54.024,24.043 54.311,53.823 12.508,-7.41 27.059,-11.743 42.664,-11.743 23.584,0 44.885,9.751 60.14,25.43 18.256,-26.448 48.743,-43.787 83.298,-43.787 37.847,0 70.796,20.828 88.111,51.633 7.294,-4.57 15.907,-7.244 25.131,-7.244 12.446,0 23.725,4.808 32.203,12.63 18.789,-13.232 41.67,-21.07 66.416,-21.07 24.491,0 47.196,7.645 65.884,20.648 8.051,-8.469 19.398,-13.784 32.021,-13.784 24.424,0 44.232,19.816 44.232,44.238 0,19.026 -12.031,35.174 -28.866,41.426" />
        </Logo>
        <Items>
          <Item>
            <Link to="/">Home</Link>
            {homeMatch && <Circle layoutId="circle" />}
            {modalMatch && <Circle layoutId="circle" />}
          </Item>
          <Item>
            <Link to="/tv">Tv Shows</Link>
            {tvMatch && <Circle layoutId="circle" />}
          </Item>
          <Item>
            <Link to="/movie">Movies</Link>
            {movieMatch && <Circle layoutId="circle" />}
          </Item>
        </Items>
      </Col>
      <Col>
        <Search onSubmit={handleSubmit(onvalid)}>
          <Magnifying
            variants={magVariants}
            animate={magAnimation}
            onClick={toggleSearch}
            initial={{ fill: theme.white.darker, x: 160 }}
            transition={{ type: "linear" }}
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </Magnifying>
          <Input
            {...register("keyword", { required: true, minLength: 2 })}
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            transition={{ type: "linear" }}
            placeholder="Search for Movie"
          />
        </Search>
      </Col>
    </Nav>
  );
};

export default Header;
