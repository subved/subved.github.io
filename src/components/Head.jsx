import styled from "styled-components";
import {
  IconMoon,
  IconGallery,
  IconSimilarity,
  IconUserCircle,
  IconBold,
  IconShield,
  IconSun,
  IconUnderline,
} from "@douyinfe/semi-icons";
import { Layout, Nav, Button, Popover, Typography } from "@douyinfe/semi-ui";
import { useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "../utils/util";
const { Header } = Layout;
const Head = () => {
  const body = document.body;

  const [isTheme, setTheme] = useState(body.hasAttribute("theme-mode"));

  const switchDarkTheme = () => {
    if (body.hasAttribute("theme-mode")) {
      body.removeAttribute("theme-mode");
      setTheme(false);
    } else {
      body.setAttribute("theme-mode", "dark");
      setTheme(true);
    }
  };
  return (
    <Header
      style={{
        backgroundColor: "var(--semi-color-bg-1)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99,
      }}
    >
      <div>
        <Nav mode="horizontal" defaultSelectedKeys={["Home"]}>
          <Nav.Header>
            <IconSimilarity
              style={{ fontSize: 36, color: "var(--semi-color-text-0)" }}
            />
            {isMobile() ? (
              ""
            ) : (
              <Typography.Title heading={4}>工具猫</Typography.Title>
            )}
          </Nav.Header>
          <Popover arrowPointAtCenter showArrow trigger="hover" content="抽卡">
            <Link to="/new">
              <Nav.Item
                itemKey="card"
                text={isMobile() ? "" : "抽卡"}
                icon={
                  <IconGallery
                    size="large"
                    style={{
                      color: "var(--semi-color-text-0)",
                    }}
                  />
                }
                style={{
                  color: "var(--semi-color-text-0)",
                }}
              />
            </Link>
          </Popover>
          <Popover
            arrowPointAtCenter
            showArrow
            trigger="hover"
            content="我的英雄"
          >
            <Link to="/hero">
              <Nav.Item
                itemKey="hero"
                text={isMobile() ? "" : "我的英雄"}
                icon={
                  <IconUserCircle
                    size="large"
                    style={{
                      color: "var(--semi-color-text-0)",
                    }}
                  />
                }
                style={{
                  color: "var(--semi-color-text-0)",
                }}
              />
            </Link>
          </Popover>
          <Popover
            arrowPointAtCenter
            showArrow
            trigger="hover"
            content="日常挖矿"
          >
            <Link to="/gold">
              <Nav.Item
                itemKey="gold"
                text={isMobile() ? "" : "日常挖矿"}
                icon={
                  <IconBold
                    size="large"
                    style={{
                      color: "var(--semi-color-text-0)",
                    }}
                  />
                }
                style={{
                  color: "var(--semi-color-text-0)",
                }}
              />
            </Link>
          </Popover>
          <Popover arrowPointAtCenter showArrow trigger="hover" content="冒险">
            <Link to="/mx">
              <Nav.Item
                itemKey="mx"
                text={isMobile() ? "" : "冒险"}
                icon={
                  <IconShield
                    size="large"
                    style={{
                      color: "var(--semi-color-text-0)",
                    }}
                  />
                }
                style={{
                  color: "var(--semi-color-text-0)",
                }}
              />
            </Link>
          </Popover>
          <Popover
            arrowPointAtCenter
            showArrow
            trigger="hover"
            content="地板价"
          >
            <Link to="/low">
              <Nav.Item
                itemKey="mx"
                text={isMobile() ? "" : "地板价"}
                icon={
                  <IconUnderline
                    size="large"
                    style={{
                      color: "var(--semi-color-text-0)",
                    }}
                  />
                }
                style={{
                  color: "var(--semi-color-text-0)",
                }}
              />
            </Link>
          </Popover>
          <Nav.Footer>
            <Popover
              arrowPointAtCenter
              showArrow
              content={isTheme ? "切换亮色模式" : "切换暗色模式"}
              trigger="hover"
              style={{
                backgroundColor: isTheme ? "#FFF" : "#666",
                borderColor: isTheme ? "#FFF" : "#666",
                color: isTheme ? "#666" : "#FFF",
              }}
            >
              <Button
                theme="borderless"
                onClick={switchDarkTheme}
                icon={
                  isTheme ? <IconSun size="large" /> : <IconMoon size="large" />
                }
                style={{
                  color: "var(--semi-color-text-0)",
                  marginRight: "12px",
                }}
              />
            </Popover>
          </Nav.Footer>
        </Nav>
      </div>
    </Header>
  );
};

export default Head;
