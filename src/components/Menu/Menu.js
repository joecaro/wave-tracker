import React from "react";
import { MenuContainer, MenuBackground, MenuButton } from "./MenuElements";

const Menu = (props) => {
  return (
    <React.Fragment>
      <MenuContainer>
        <MenuBackground>
          <MenuButton onClick={() => props.toggleData(props.dataSets.today)}>
            <i class='bi bi-calendar'>
              <i
                style={{ fontSize: "1.5rem", marginLeft: "-32px" }}
                class='bi bi-arrow-down-circle'></i>
            </i>
          </MenuButton>
          <MenuButton onClick={() => props.toggleData(props.dataSets.tomorrow)}>
            <i class='bi bi-calendar'>
              <i
                style={{ fontSize: "1.5rem", marginLeft: "-32px" }}
                class='bi bi-arrow-right-circle'></i>
            </i>
          </MenuButton>
          <MenuButton>
            <i class='bi bi-circle-half'></i>
          </MenuButton>
        </MenuBackground>
      </MenuContainer>
    </React.Fragment>
  );
};

export default Menu;
