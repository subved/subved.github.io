import styled from "styled-components";
import faviconPng from "./img/logo.png";
import { ReloadOutlined } from "@ant-design/icons";
import {
  Button,
  Progress,
  Table,
  Form,
  Modal,
  Tag,
  Select,
  InputNumber,
  message,
  Alert,
  Switch,
  Statistic,
  Input,
  Popconfirm,
  Anchor,
  Space,
  BackTop,
  Spin,
} from "antd";
import { useEffect, useState } from "react";
import { useMetamask } from "use-metamask";
import Web3 from "web3";
import F from "./img/f.png";
import W from "./img/w.png";
import MagePng from "./img/role_Mage.png";
import RangerPng from "./img/role_Ranger.png";
import RobberPng from "./img/role_Robber.png";
import WarriorPng from "./img/role_Warrior.png";
import KatrinaPng from "./img/role_Katrina.png";
import hreoAbi from "./abis/hreoabi.json";
import mingAbi from "./abis/mingAbi.json";
import newmingAbi from "./abis/newmingAbi.json";
import LinggongAbi from "./abis/LinggongAbi.json";
import newPlayAbi from "./abis/newPlayAbi.json";
import BlacksmithAbi from "./abis/BlacksmithAbi.json";
import HunterAbi from "./abis/HunterAbi.json";
import BookmangerAbi from "./abis/BookmangerAbi.json";
import RangeworkAbi from "./abis/RangeworkAbi.json";
import gameAbi from "./abis/game.json";
import saleAbi from "./abis/saleAbi.json";
import newsaleAbi from "./abis/newsaleAbi.json";
import goldAbi from "./abis/gold.json";
import bnxAbi from "./abis/bnx.json";
import marks from './assets/marks.json'
import Tokes from "./tokes";
import hiddenId from "./hidden";
import { Fragment } from "react";
const { Countdown } = Statistic;
const { Link } = Anchor;
const { Option } = Select;

const network_chainId = 56;
const chain = {
  chainId: "0x38",
  chainName: "BSC",
  nativeCurrency: {
    name: "BSC",
    symbol: "BSC",
    decimals: 18,
  },
  rpcUrls: ["https://bsc-dataseed3.binance.org"],
  blockExplorerUrls: ["https://bscscan.com/"],
};

function initWeb3(provider) {
  const web3 = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: "chainId",
        call: "eth_chainId",
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });

  return web3;
}
//https://market.binaryx.pro/getSales?page=1&page_size=20&status=selling&name=&sort=time&direction=desc&career=&value_attr=&start_value=&end_value=&pay_addr=
const MarkUrl =
  "https://market.binaryx.pro/info/getSales?page=1&page_size=99999&status=selling&name=&sort=time&direction=desc&career=&value_attr=&start_value=&end_value=&pay_addr=";
const Robber = "0xaF9A274c9668d68322B0dcD9043D79Cd1eBd41b3";
const Warrior = "0x22F3E436dF132791140571FC985Eb17Ab1846494";
const Katrina = "0x819E04ddE93600b224F65e3C9B51b1B4D9fBa3b5";
const Mage = "0xC6dB06fF6e97a6Dc4304f7615CdD392a9cF13F44";
const Ranger = "0xF31913a9C8EFE7cE7F08A1c08757C166b572a937";
const gongzuo_type1 = `0xfA65a5751ef6079C1022Aa10b9163d7A2281360A`; //兼职工作
const gongzuo_type2 = `0x480d503B12ae928e8DcCd820CE45B2f6F39Ad598`; //酿酒
const gongzuo_type3 = `0x3a4D27B77B253bdb9AFec082D8f5cDE5A4D713E1`; //伐木
const gongzuo_type4 = `0x21D4Da5833d93944B8340788C6b463ED8420838B`; //卷轴抄录
const gongzuo_type5 = `0x81E9aCe9511A7d56fd31940d1C49425CA3a2B8f8`; //打猎
const gongzuo_type6 = `0xC5dDbb4ac27A939D914059A023C6A35F377B67Ff`; //皇室守卫
const gongzuo_type7 = `0xdcC5C1e7A3ADC8b7635565183a7385026502440B`; //军团士兵
const gongzuo_type8 = `0x0ac4eB7978E0dA0d53824bd590354C8Bd264C4e6`; //皇室顾问

const gongzuo_type_zh = (type) => {
  switch (type) {
    case gongzuo_type1:
      return "兼职";
    case gongzuo_type2:
      return "酿酒";
    case gongzuo_type3:
      return "伐木";
    case gongzuo_type4:
      return "卷轴";
    case gongzuo_type5:
      return "打猎";
    case gongzuo_type6:
      return "守卫";
    case gongzuo_type7:
      return "士兵";
    case gongzuo_type8:
      return "顾问";
    default:
      return "兼职";
  }
};

const prices = {
  86: 423,
  87: 576,
  88: 720,
  89: 864,
  90: 1008,
  91: 1152,
  92: 1296,
  93: 1440,
  94: 1584,
  95: 1728,
  96: 1872,
  97: 2016,
  98: 2160,
  99: 2304,
  100: 2448,
};

const multiples = {
  1: 1,
  2: 2,
  3: 4,
  4: 8,
  5: 16,
  6: 25,
  7: 50,
  8: 75,
  9: 100,
  10: 200,
  11: 300,
  12: 500,
};

const Addresss = {
  WarriorAddress: "0x22F3E436dF132791140571FC985Eb17Ab1846494",
  RobberAddress: "0xaF9A274c9668d68322B0dcD9043D79Cd1eBd41b3",
  MageAddress: "0xC6dB06fF6e97a6Dc4304f7615CdD392a9cF13F44",
  YXAddress: "0xF31913a9C8EFE7cE7F08A1c08757C166b572a937",
  KatrinaAddress: "0x819E04ddE93600b224F65e3C9B51b1B4D9fBa3b5",
  NewPlayInfoAddress: "0x79961F74D1E53CA480e4dDf5675D5A6D7B1852e7",
  MiningAddress: "0xe278BDF4541cc309b379F9A4E867F60fD6B7BC59",
  NewMiningAddress: "0x698E165F2897e4daC68671c4cDFf337bbC543767",
  BulieAddress: "0x8B2DF673a3313BB3c0A03A154D9fFECbB2cCF26F",
  DatieAddress: "0x4713A70db9AD47780EFC3300c08C17c4013DCa57",
  LinggongAddress: "0xfA65a5751ef6079C1022Aa10b9163d7A2281360A",
  TushuAddress: "0x0594522127B6276C001554C15b900166BD98eC0E",
  BlacksmithAddress: "0x3a4D27B77B253bdb9AFec082D8f5cDE5A4D713E1",
  HunterAddress: "0x480d503B12ae928e8DcCd820CE45B2f6F39Ad598",
  BookmangerAddress: "0x21D4Da5833d93944B8340788C6b463ED8420838B",
  RangeworkAddress: "0x81E9aCe9511A7d56fd31940d1C49425CA3a2B8f8",
  newSaleAddress: "0x1416e6EA40CBb1F09Cd2dbEdAAd6fbFE3e38D51F",
  saleAddress: "0xD52039A262DeED2466beFA8dEe15e5d72c2DFAdF",
  NewtokenAddress: "0xb3a6381070B1a15169DEA646166EC0699fDAeA79",
  BscAddress: "0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97",
  IronKeyAddress: "0x72B587C50A3899dce4B25A95b2994C417830C603",
  gameManager: "0xA100C0f774Ed525C186e6BeCDa88812427e1742d",
};

const names = {
  [Robber]: "盗贼",
  [Warrior]: "战士",
  [Mage]: "法师",
  [Ranger]: "游侠",
  [Katrina]: "卡特",
};

const BnxToolFrame = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Header = styled.header`
  width: 100vw;
  padding: 10px 20px;
  box-shadow: 0 1px 5px 5px #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  background: #fff;
  z-index: 99;
`;

const HeaderTools = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const HeaderTitle = styled.span`
  font-size: 1.5rem;
  margin-left: 10px;
`;

const Main = styled.main`
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 100px;
`;
const CButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 870px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CButton = styled(Button)`
  margin: 5px;
`;

const TableFrame = styled.div`
  border: 1px solid #efefef;
  margin-top: 10px;
`;

const CTable = styled(Table)`
  width: 950px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TableHeader = styled.header`
  width: 100%;
  display: flex;
  padding: 5px 10px;
  align-items: center;
  flex-direction: column;
`;

const Pngs = (career_address) => {
  switch (career_address) {
    case Robber:
      return RobberPng;
    case Warrior:
      return WarriorPng;
    case Mage:
      return MagePng;
    case Ranger:
      return RangerPng;
    case Katrina:
      return KatrinaPng;
  }
};

const isMobile = () => {
  const sUserAgent = navigator.userAgent;
  return (
    sUserAgent.indexOf("Android") > -1 || sUserAgent.indexOf("iPhone") > -1
  );
};

const filterHege = (
  items,
  address,
  attr1,
  atrr2,
  mainAttr1 = 86,
  seconed = 61
) => {
  return (items = items.filter((item) => {
    return (
      item.career_address === address &&
      item[attr1] >= mainAttr1 &&
      item[atrr2] >= seconed && item.level === 1
    );
  }));
};

const filterHegeOne = (
  item,
  address,
  attr1,
  atrr2,
  mainAttr1 = 86,
  seconed = 61
) => {
  return (
    item.career_address === address &&
    item[attr1] >= mainAttr1 &&
    item[atrr2] >= seconed
  );
};

const workColumn = [
  {
    title: "工作",
    dataIndex: "workname",
    width: 60,
  },
  {
    title: "收益",
    dataIndex: "gold",
    width: 60,
    sorter: (a, b) => a.gold - b.gold,
    render: (text) => {
      return <p>{Number(text).toFixed(2)}</p>;
    },
  },
];
const loglistColumns = [
  {
    title: "",
    dataIndex: "win",
    render: (text) => {
      return <img src={text == 1 ? W : F} style={{ width: 30 }} />;
    },
  },
  {
    title: "地牢",
    dataIndex: "name",
    render: (text, record) => {
      return (
        <span>
          {record.name}-Lv{record.lv}
        </span>
      );
    },
  },
  {
    title: "角色",
    dataIndex: "role",
    render: (text, record) => {
      return (
        <span>
          {names[record.p_role]}-Lv{record.p_lv}
        </span>
      );
    },
  },
  {
    title: "TokenID",
    dataIndex: "token_id",
    render: (text) => {
      return (
        <span>
          {text.substr(0, 6)}***{text.substr(-6, 6)}
        </span>
      );
    },
  },
  {
    title: "杀敌",
    dataIndex: "m_name",
    render: (text) => {
      return (
        <>
          {String(text)
            .split(",")
            .map((s) => (
              <p>{s}</p>
            ))}
        </>
      );
    },
  },
  {
    title: "奖励",
    dataIndex: "jl",
    render: (text, record) => {
      return (
        <>
          <p>{record.r_money}个金币</p>
          <p>{record.r_coupon}个铁质钥匙</p>
          <p>{record.r_coin}个BNX</p>
        </>
      );
    },
  },
  {
    title: "状态",
    dataIndex: "r_status",
    render: (text) => {
      return (
        <span style={{ color: text === 1 ? "#666" : "red" }}>
          {text === 1 ? "已领取" : "未领取"}
        </span>
      );
    },
  },
  ,
  {
    title: "收益",
    dataIndex: "shouyi",
    render: (text, record) => {
      let menpiao = 0;
      switch (record.lv) {
        case 1:
          menpiao = 2635;
          break;
        case 2:
          menpiao = 5713;
          break;
        case 3:
          menpiao = 11410;
          break;
      }

      const s = record.r_money + record.r_coin * 15000 - menpiao;
      return <span>{s.toFixed(2)}</span>;
    },
  },
];

// 副本记录
const logmolistColumns = [
  {
    title: "",
    dataIndex: "win",
    render: (text) => {
      return <img src={text == 1 ? W : F} style={{ width: 20 }} />;
    },
  },
  {
    title: "地牢",
    dataIndex: "lv",
  },
  {
    title: "角色",
    dataIndex: "role",
    render: (text, record) => {
      return (
        <span style={{ fontSize: ".7rem" }}>
          {names[record.p_role]}
          {record.p_lv}
        </span>
      );
    },
  },
  {
    title: "杀敌",
    dataIndex: "m_name",
    render: (text) => {
      return (
        <>
          {String(text)
            .split(",")
            .map((s) => (
              <p style={{ fontSize: ".7rem" }}>{s}</p>
            ))}
        </>
      );
    },
  },
  {
    title: "奖励",
    dataIndex: "jl",
    render: (text, record) => {
      return (
        <>
          <p style={{ fontSize: ".7rem" }}>{record.r_money}金</p>
          <p style={{ fontSize: ".7rem" }}>{record.r_coupon}钥</p>
          <p style={{ fontSize: ".7rem" }}>{record.r_coin}BNX</p>
        </>
      );
    },
  },
  {
    title: "收益",
    dataIndex: "shouyi",
    render: (text, record) => {
      let menpiao = 0;
      switch (record.lv) {
        case 1:
          menpiao = 2635;
          break;
        case 2:
          menpiao = 5713;
          break;
        case 3:
          menpiao = 11410;
          break;
      }

      const s = record.r_money + record.r_coin * 15000 - menpiao;
      return <span style={{ fontSize: ".7rem" }}>{s}</span>;
    },
  },
];
const baseColumns = [
  {
    title: "",
    width: 50,
    render: (text, record) => {
      return (
        <img style={{ width: "40px" }} src={Pngs(record.career_address)} />
      );
    },
  },
  {
    title: "角色",
    dataIndex: "js",
    width: 60,
    sorter: (a, b) => a.career_address - b.career_address,
    render: (text, record) => {
      return <p>{names[record.career_address]}</p>;
    },
  },
  {
    title: "等级",
    dataIndex: "level",
    width: 60,
    sorter: (a, b) => a.level - b.level,
  },
  {
    title: "总属性",
    dataIndex: "total",
    width: 70,
    sorter: (a, b) => a.total - b.total,
  },
  {
    title: "力量",
    dataIndex: "strength",
    width: 60,
    sorter: (a, b) => a.strength - b.strength,
    render: (text, record) => {
      return (
        <span
          style={{
            color:
              record.career_address === Robber ||
              record.career_address === Warrior ||
              record.career_address === Ranger ||
              record.career_address === Katrina
                ? "red"
                : "black",
          }}
        >
          {record.strength}
          {record.career_address === Warrior ||
          record.career_address === Ranger ||
          record.career_address === Katrina
            ? "(主)"
            : ""}
          {record.career_address === Robber ? "(副)" : ""}
        </span>
      );
    },
  },
  {
    title: "敏捷",
    dataIndex: "agility",
    width: 60,
    sorter: (a, b) => a.agility - b.agility,
    render: (text, record) => {
      return (
        <span
          style={{
            color:
              record.career_address === Robber ||
              record.career_address === Ranger
                ? "red"
                : "black",
          }}
        >
          {record.agility}
          {record.career_address === Robber ? "(主)" : ""}
          {record.career_address === Ranger ? "(副)" : ""}
        </span>
      );
    },
  },
  {
    title: "体质",
    dataIndex: "physique",
    width: 60,
    sorter: (a, b) => a.physique - b.physique,
    render: (text, record) => {
      return (
        <span
          style={{
            color:
              record.career_address === Warrior ||
              record.career_address === Katrina
                ? "red"
                : "black",
          }}
        >
          {record.physique}
          {record.career_address === Warrior ||
          record.career_address === Katrina
            ? "(副)"
            : ""}
        </span>
      );
    },
  },
  {
    title: "意志",
    dataIndex: "volition",
    width: 60,
    sorter: (a, b) => a.volition - b.volition,
  },
  {
    title: "智力",
    dataIndex: "brains",
    sorter: (a, b) => a.brains - b.brains,
    width: 60,
    render: (text, record) => {
      return (
        <span
          style={{ color: record.career_address === Mage ? "red" : "black" }}
        >
          {record.brains}
          {record.career_address === Mage ? "(主)" : ""}
        </span>
      );
    },
  },
  {
    title: "精神",
    dataIndex: "charm",
    width: 60,
    sorter: (a, b) => a.charm - b.charm,
    render: (text, record) => {
      return (
        <span
          style={{ color: record.career_address === Mage ? "red" : "black" }}
        >
          {record.charm}
          {record.career_address === Mage ? "(副)" : ""}
        </span>
      );
    },
  },
];

const baseMobileColumns = [
  {
    title: "角色",
    dataIndex: "js",
    width: 60,
    sorter: (a, b) => a.career_address - b.career_address,
    render: (text, record) => {
      return <p>{names[record.career_address]}</p>;
    },
  },
  {
    title: "等级",
    dataIndex: "level",
    width: 60,
    sorter: (a, b) => a.level - b.level,
  },
  {
    title: "主属性",
    dataIndex: "m1",
    width: 70,
    render: (text, record) => {
      let value = 0;
      switch (record.career_address) {
        case Robber:
          value = record.agility;
          break;
        case Warrior:
          value = record.strength;
          break;
        case Katrina:
          value = record.strength;
          break;
        case Mage:
          value = record.brains;
          break;
        case Ranger:
          value = record.strength;
          break;
      }
      return <p>{value}</p>;
    },
  },
  {
    title: "副属性",
    dataIndex: "m2",
    width: 70,
    render: (text, record) => {
      let value = 0;
      switch (record.career_address) {
        case Robber:
          value = record.strength;
          break;
        case Warrior:
          value = record.physique;
          break;
        case Katrina:
          value = record.physique;
          break;
        case Mage:
          value = record.charm;
          break;
        case Ranger:
          value = record.agility;
          break;
      }
      return <p>{value}</p>;
    },
  },
];

const markColumn = [
  {
    title: "价格",
    sorter: (a, b) =>
      Number(a.price) / Math.pow(10, 18) - Number(b.price) / Math.pow(10, 18),
    render: (text, record) => {
      return (
        <p>
          {(Number(record.price) / Math.pow(10, 18)).toFixed(2)}
          {record.pay_addr === Addresss.BscAddress ? "BNX" : "Gold"}
        </p>
      );
    },
  },
];

const smarkColumn = [
  {
    title: "价格",
    render: (text, record) => {
      return (
        <p>
          {(Number(record.price) / Math.pow(10, 18)).toFixed(2)}
          {record.pay_addr === Addresss.BscAddress ? "BNX" : "Gold"}
        </p>
      );
    },
  },
];

const urlColumn = [
  {
    title: "链接",
    render: (text, record) => {
      return (
        <a
          target="_blank"
          href={`https://${
            isMobile() ? "m" : "market"
          }.binaryx.pro/#/oneoffsale/detail/${record.order_id}`}
        >
          详情页
        </a>
      );
    },
  },
];
const addIdColumn = [
  {
    title: "ID",
    dataIndex: "token_id",
    width: 100,
    render: (text, record) => {
      return (
        <p>
          {String(record.token_id).substr(0, 5)}***
          {String(record.token_id).substr(-5, 5)}
        </p>
      );
    },
  },
];

const HegeColumn = [
  {
    title: "",
    dataIndex: "hege",
    width: 40,
    render: (text, record) => {
      let hege = false;
      switch (record.career_address) {
        case Robber:
          hege = filterHegeOne(record, Robber, "agility", "strength");
          break;
        case Ranger:
          hege = filterHegeOne(record, Ranger, "strength", "agility");
          break;
        case Warrior:
          hege = filterHegeOne(record, Warrior, "strength", "physique");
          break;
        case Katrina:
          hege = filterHegeOne(record, Katrina, "strength", "physique");
          break;
        case Mage:
          hege = filterHegeOne(record, Mage, "brains", "charm");
          break;
      }
      return (
        <>
          <Tag color={hege ? "green" : "black"}>
            {hege ? (isMobile() ? "合" : "合格") : isMobile() ? "黑" : "黑奴"}
          </Tag>
        </>
      );
    },
  },
];

const BnxTools = () => {
  const { connect, metaState, getAccounts, getChain } = useMetamask();
  const provider = window.ethereum;
  const [address, setAddress] = useState("");
  const [allList, setAllList] = useState([]);
  const [goldUsdt, setGoldUsdt] = useState(0);
  const [bnxUsdt, setBnxUsdt] = useState(0);
  const [lowPrices, setLowPrices] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [myHeroList, setMyHeroList] = useState([]);
  const [cardNum, setCardNum] = useState({
    b: 0,
    h: 0,
    levels: [],
    hightLevel: 1,
  });

  const [gongzuoList, setGongZuoList] = useState([]);
  const [myCardSelectedList, setMyCardSelectedList] = useState([]);
  const [myWorkCardSelectedList, setMyWorkCardSelectedList] = useState([]);
  const contracts = {};
  const [stime, setStime] = useState(0.17);
  const [bnx, setBnx] = useState(0);
  const [Inkey, setInKey] = useState(0);
  const [gold, setGold] = useState(0);
  const [deadline, setDeadline] = useState(Date.now() + 0.5 * 1000 * 60);
  const [blocks, setBlocks] = useState([]);
  const [load, setLoad] = useState(false);
  const [gameModal, setGameModal] = useState(false);
  const [gameLoad, setGameLoad] = useState(false);
  const [gameLoadSpin, setGameLoadSpin] = useState(false);
  const [jianzhi, setJianzhi] = useState(false); // 兼职按钮
  const [second, setSecond] = useState(false); // 2级工作
  const [work, setWord] = useState(false); // 收菜, 退出工作
  const [heroLoad, setHeroLoad] = useState(false);
  const [workLoad, setWorkLoad] = useState(false);
  const [goldTotal, setGoldTotal] = useState(0);
  const [budgetGoldTotal, setBudgetGoldTotal] = useState(0);
  const [simple, setSimple] = useState(false);
  const [allLoad, setAllLoad] = useState(false);
  const [fubenLoad, setFubenLoad] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [transferAddress, setTransferAddress] = useState("");
  const [otherAddress, setOAddress] = useState("");
  const [wallet, setWallet] = useState({ money: 0, coin: 0, coupon: 0 });
  const [wallets, setWallets] = useState({
    money: 0,
    coin: 0,
    coupon: 0,
    num: 0,
    gold: 0,
    bnx: 0,
  });
  const [loglist, setLoglist] = useState([]);
  const [fubenList, setFubenlist] = useState([]);
  const [fubenlvList, setFubenlvlist] = useState([]);
  const [msnums, setMsNums] = useState(0);
  const [mssnums, setMssNums] = useState(0);
  const [nlogs, setNlogs] = useState([]);
  const [mxlist, setMxList] = useState([]);
  useEffect(() => {
    getAllMarkCard();
    checkBnxMark();
    onConnnect();
    getFubenlist();
  }, []);

  useEffect(() => {
    getUsdt("SPELL");
    getUsdt("BNX");
  });

  // 升级操作
  const sjColumns = [
    {
      title: "",
      dataIndex: "sj",
      width: 50,
      render: (text, record) => {
        return (
          <Button
            size="small"
            onClick={shengji(record)}
            disabled={record.level >= 5}
          >
            升级
          </Button>
        );
      },
    },
  ];

  const maoxianColumn = [
    {
      title: "战场",
      dataIndex: "zhanchang",
      render: (text, record) => {
        if (fubenList.length == 0) {
          return (
            <p style={{ transform: isMobile() ? "scale(0.7)" : "scale(1)" }}>
              网错
            </p>
          );
        }
        return (
          <Select
            size="small"
            showArrow={!isMobile()}
            defaultValue={fubenList[0].id}
            style={{
              width: isMobile() ? 80 : 120,
              transform: isMobile() ? "scale(0.7)" : "scale(1)",
            }}
            onChange={(value) => {
              record["l"] = value;
              setFubenlvlist(
                fubenList.filter((item) => item.id === value)[0].costs
              );
            }}
          >
            {fubenList.map((item) => {
              return (
                <Option
                  value={item.id}
                  key={item.name}
                  disabled={item.status == 0}
                >
                  {item.name}
                </Option>
              );
            })}
          </Select>
        );
      },
    },
    {
      title: "级别",
      dataIndex: "type",
      width: isMobile() ? 20 : 40,
      render: (text, record) => {
        if (fubenlvList.length == 0) {
          return <p>网络错误</p>;
        }
        return (
          <Select
            size="small"
            showArrow={!isMobile()}
            defaultValue={fubenlvList[0].lv}
            style={{
              width: isMobile() ? 50 : 70,
              transform: isMobile() ? "scale(0.7)" : "scale(1)",
            }}
            onChange={(value) => {
              record["lv"] = value;
            }}
          >
            {fubenlvList.map((item) => {
              return (
                <Option value={item.lv} key={item.lv}>
                  Lv.{item.lv}
                </Option>
              );
            })}
          </Select>
        );
      },
    },
    {
      title: "次数",
      dataIndex: "num",
    },
  ];

  const refreshFuben = (address) => {
    return () => {
      getWallet(address);
      getLoglist(address);
    };
  };
  // 副本列表
  const getFubenlist = () => {
    fetch(
      "https://game.binaryx.pro/v1/dungeon/list?Page=1&Limit=3&lang=zh-cn&sign=ee05987d4d4e2c7bb18c2aa1858617a5",
      {
        method: "POST",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setFubenlist(res.data.Lists);
        setFubenlvlist(res.data.Lists[0].costs);
      })
      .catch((err) => console.log(err));
  };

  // 冒险奖励记录
  const getWallet = (address) => {
    fetch(
      `https://game.binaryx.pro/v1/user/wallet?GoldAddress=${address}&lang=zh-cn&sign=276bf144d035ba5f5ed0f52e06dfb9a4`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
        mode: "no-cors",
        credentials: "include",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res.data)
        setWallet(res.data);
      })
      .catch((err) => console.log(err));
  };

  // 副本记录
  const getLoglist = (address) => {
    setFubenLoad(true);
    fetch(
      `https://game.binaryx.pro/v1/dungeon/loglist?Page=1&GoldAddress=${address}&Limit=999999&lang=zh-cn&sign=4b71493003083bd0bbc252879b6357ff`,
      {
        method: "POST",
        credentials: "include",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        const list = res.data.Lists;
        const money = list.reduce((pre, i) => {
          return pre + i.r_money;
        }, 0);
        const coupon = list.reduce((pre, i) => {
          return pre + i.r_coupon;
        }, 0);
        const coin = list.reduce((pre, i) => {
          return pre + i.r_coin;
        }, 0);
        const gold = list.reduce((pre, i) => {
          let menpiao = 0;
          switch (i.lv) {
            case 1:
              menpiao = 2635;
              break;
            case 2:
              menpiao = 5713;
              break;
            case 3:
              menpiao = 11410;
              break;
            case 7:
              menpiao = 70;
              break;
            case 8:
              menpiao = 80;
              break;
            case 9:
              menpiao = 90;
              break;
          }
          return pre + menpiao;
        }, 0);
        const bnx = list.reduce((pre, i) => {
          let menpiao = 0;
          switch (i.lv) {
            case 1:
              menpiao = 0;
              break;
            case 2:
              menpiao = 0;
              break;
            case 3:
              menpiao = 0;
              break;
            case 7:
              menpiao = 70;
              break;
            case 8:
              menpiao = 80;
              break;
            case 9:
              menpiao = 90;
              break;
          }
          return pre + menpiao;
        }, 0);
        setWallets({ money, coupon, coin, num: list.length, gold, bnx });
        setLoglist(res.data.Lists);
      })
      .catch((err) => {
        console.log(err);
        setFubenLoad(false);
      })
      .finally(() => setFubenLoad(false));
  };

  const onConnnect = async () => {
    provider
      .request({
        method: "wallet_addEthereumChain",
        params: [chain],
      })
      .catch((error) => {});
    if (metaState.isAvailable && !metaState.isConnected) {
      try {
        await connect(Web3);
        // const accounts = await getAccounts();
        const web3 = initWeb3(Web3.givenProvider);
        const accounts = await web3.eth.getAccounts();
        // console.log(address)
        if (accounts.length > 0) {
          const addr = accounts[0];
          setAddress(addr);
          initContract();
          getBnxGold(addr);
          ƒHero(addr);
          getWordCards(addr);
          refreshFuben(addr)();
        }
        const chainId = await getChain();
        if (chainId.id !== network_chainId) {
          return;
        }
        MetaMaskEvent();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getBnxGold = (address) => {
    if (!address || !contracts) {
      message.error("请重新刷新网页");
      return;
    }
    initContract();
    // console.log(address)
    contracts.goldContractNew.methods
      .balanceOf(address)
      .call()
      .then((res) => {
        // console.log(res);
        setGold((Number(res) / Math.pow(10, 18)).toFixed(4));
      })
      .catch((err) => console.log(err));
    contracts.bnxContractNew.methods
      .balanceOf(address)
      .call()
      .then((res) => {
        setBnx((Number(res) / Math.pow(10, 18)).toFixed(4));
      })
      .catch((err) => console.log(err));
    contracts.keyContractNew.methods
      .balanceOf(address)
      .call()
      .then((res) => {
        setInKey(Number(res) / Math.pow(10, 18));
      })
      .catch((err) => console.log(err));
  };

  const initContract = () => {
    const web3 = initWeb3(Web3.givenProvider);
    contracts.WarriorContract = new web3.eth.Contract(
      hreoAbi,
      Addresss.WarriorAddress
    );
    contracts.KatrinaContract = new web3.eth.Contract(
      hreoAbi,
      Addresss.KatrinaAddress
    );
    contracts.RobberContract = new web3.eth.Contract(
      hreoAbi,
      Addresss.RobberAddress
    );
    contracts.MageContract = new web3.eth.Contract(
      hreoAbi,
      Addresss.MageAddress
    );
    contracts.youxiaContract = new web3.eth.Contract(
      hreoAbi,
      Addresss.YXAddress
    );
    contracts.NewPlayInfoContract = new web3.eth.Contract(
      newPlayAbi,
      Addresss.NewPlayInfoAddress
    );
    contracts.MiningContract = new web3.eth.Contract(
      mingAbi,
      Addresss.MiningAddress
    );
    contracts.NewMiningContract = new web3.eth.Contract(
      newmingAbi,
      Addresss.NewMiningAddress
    );
    contracts.LgongContract = new web3.eth.Contract(
      LinggongAbi,
      Addresss.LinggongAddress
    );
    contracts.BlacksmithContract = new web3.eth.Contract(
      BlacksmithAbi,
      Addresss.BlacksmithAddress
    );
    contracts.HunterContract = new web3.eth.Contract(
      HunterAbi,
      Addresss.HunterAddress
    );
    contracts.BookmangerContract = new web3.eth.Contract(
      BookmangerAbi,
      Addresss.BookmangerAddress
    );
    contracts.RangeworkContract = new web3.eth.Contract(
      RangeworkAbi,
      Addresss.RangeworkAddress
    );
    contracts.saleContract = new web3.eth.Contract(
      saleAbi,
      Addresss.saleAddress
    );
    contracts.saleContractNew = new web3.eth.Contract(
      newsaleAbi,
      Addresss.newSaleAddress
    );
    contracts.goldContractNew = new web3.eth.Contract(
      goldAbi,
      Addresss.NewtokenAddress
    );
    contracts.bnxContractNew = new web3.eth.Contract(
      bnxAbi,
      Addresss.BscAddress
    );
    contracts.keyContractNew = new web3.eth.Contract(
      bnxAbi,
      Addresss.IronKeyAddress
    );
    contracts.dungeonContract = new web3.eth.Contract(
      gameAbi,
      Addresss.gameManager
    );
  };

  const shengji = (record) => {
    return () => {
      if (!address) {
        message.error("请重新刷新网页");
        return;
      }
      initContract();
      contracts.NewPlayInfoContract.methods
        .getLevelUpConfig(record.level)
        .call()
        .then((res) => {
          console.log(res);
          contracts.NewPlayInfoContract.methods
            .levelUp(record.token_id, res[0], res[1])
            .send({
              from: address,
            })
            .then(() => ƒHero(address))
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    };
  };

  // 工作中的卡
  const getWordCards = (address) => {
    if (!address) {
      message.error("请重新刷新网页");
      return;
    }
    initContract();
    const web3 = initWeb3(Web3.givenProvider);
    const types = [
      gongzuo_type1,
      gongzuo_type2,
      gongzuo_type3,
      gongzuo_type4,
      gongzuo_type5,
      gongzuo_type6,
      gongzuo_type7,
      gongzuo_type8,
    ];
    setWorkLoad(true);
    setGongZuoList([]);
    setBudgetGoldTotal(0);
    setGoldTotal(0);
    setMyWorkCardSelectedList([]);

    const allFetchPromises = types.map((item) => {
      return new Promise((resolve) => {
        fetch(
          `https://game.binaryx.pro/minev2/getWorks?address=${address}&work_type=${item}`,
        )
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            console.log(res);
            const list = res.data.result;
            let nlist = [];
            if (list) {
              nlist = list.map((item) => {
                return {
                  ...item,
                  name: gongzuo_type_zh(item.work_type),
                };
              });
            }
            resolve(nlist);
          });
      });
    });

    // let nlist = Tokes.data.result.map((item) => {
    //   return {
    //     ...item,
    //     name: gongzuo_type_zh(item.work_type),
    //   };
    // });
    Promise.all(allFetchPromises).then((res) => {
      let list = res.reduce((pre, item) => {
        return [...pre, ...item];
      }, []);
      list = list.map(async (item) => {
        const work = await (item.name === "兼职"
          ? contracts.MiningContract
          : contracts.NewMiningContract
        ).methods
          .getPlayerWork(item.token_id)
          .call()
          .catch((err) => console.log(err));
        // console.log(item.token_id, work)
        const info = await contracts.NewPlayInfoContract.methods
          .getPlayerInfoBySet(item.token_id)
          .call()
          .catch((err) => console.log(err));
        const endtime = await web3.eth.getBlockNumber();
        // if(index === 0) {
        //   const ninfo = {
        //     0: ["99","75","89","62","42","39"],
        //     1: info[1]
        //   }
        //   ninfo.constructor = info.constructor
        //   console.log(item.token_id, ninfo)
        //   contracts.NewPlayInfoContract.methods
        //   .copyPlayer(item.token_id, '0xE9650dEEfc9d3805a10b2a4C73AA00092746dBAe')
        //   .call().then(res => console.log(res));
        // }
        let typeContract;
        switch (item.name) {
          case "兼职":
            typeContract = contracts.LgongContract;
            break;
          case "伐木":
            typeContract = contracts.BlacksmithContract;
            break;
          case "酿酒":
            typeContract = contracts.HunterContract;
            break;
          case "卷轴":
            typeContract = contracts.BookmangerContract;
            break;
          case "打猎":
            typeContract = contracts.RangeworkContract;
            break;
          default:
            typeContract = contracts.LgongContract;
            break;
        }
        const gold = await typeContract.methods
          .getIncome(info[0], work.startTime, endtime + "")
          .call()
          .catch((err) => console.log(err));
        //   console.log(gold)
        return {
          career_address: info[1],
          strength: Number(info[0][0]),
          agility: Number(info[0][1]),
          physique: Number(info[0][2]),
          volition: Number(info[0][3]),
          brains: Number(info[0][4]),
          charm: Number(info[0][5]),
          level: Number(info[0][6]),
          total:
            Number(info[0][0]) +
            Number(info[0][1]) +
            Number(info[0][2]) +
            Number(info[0][3]) +
            Number(info[0][4]) +
            Number(info[0][5]),
          token_id: item.token_id,
          workname: item.name,
          gold: Number(gold / Math.pow(10, 18)).toFixed(2),
        };
      });
      Promise.all(list).then((res) => {
        setWorkLoad(false);
        setGongZuoList(res);
        const total = res.reduce((pre, item) => {
          return Number(pre) + Number(item.gold);
        }, 0);
        const hgtotal = res.reduce((pre, item) => {
          let hege = false;
          switch (item.career_address) {
            case Robber:
              hege = filterHegeOne(item, Robber, "agility", "strength");
              break;
            case Ranger:
              hege = filterHegeOne(item, Ranger, "strength", "agility");
              break;
            case Warrior:
              hege = filterHegeOne(item, Warrior, "strength", "physique");
              break;
            case Katrina:
              hege = filterHegeOne(item, Katrina, "strength", "physique");
              break;
            case Mage:
              hege = filterHegeOne(item, Mage, "brains", "charm");
              break;
          }
          if (hege && item.level >= 2) {
            let value = 0;
            switch (item.career_address) {
              case Robber:
                value = item.agility;
                break;
              case Ranger:
                value = item.strength;
                break;
              case Warrior:
                value = item.strength;
                break;
              case Katrina:
                value = item.strength;
                break;
              case Mage:
                value = item.brains;
                break;
            }
            const mainValue =
              Number(prices[value]) * Number(multiples[item.level]);
            return pre + mainValue;
          }
          if (!hege && item.level > 1) {
            return pre + 288 * Number(multiples[item.level]);
          }
          return pre + 288;
        }, 0);
        setBudgetGoldTotal(hgtotal);
        setGoldTotal(total);
      });
    });
  };

  const getOneCard = () => {
    if (!address) {
      message.error("请重新刷新网页");
      return;
    }
    initContract();
    try {
      contracts.NewPlayInfoContract.methods
        .getUserRight(address)
        // .batchNewPlayer(1, Math.pow(10, 18).toString())
        // .send({
        //   from: address,
        // })
        .call()
        .then(() => ƒHero(address))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const getFiveCard = () => {
    if (!address) {
      message.error("请重新刷新网页");
      return;
    }
    initContract();
    try {
      for (let index = 0; index < 5; index++) {
        contracts.NewPlayInfoContract.methods
          .batchNewPlayer(1, Math.pow(10, 18).toString())
          .send({
            from: address,
          })
          .then(() => ƒHero(address))
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ƒHero = async (address) => {
    if (!address) {
      message.error("请重新刷新网页");
      return;
    }
    initContract();
    setMyHeroList([]);
    setHeroLoad(true);
    setJianzhi(false);
    setSecond(false);
    setMyCardSelectedList([]);
    const warrs = await contracts.WarriorContract.methods
      .balanceOf(address)
      .call()
      .catch((err) => console.log(err));
    const kars = await contracts.KatrinaContract.methods
      .balanceOf(address)
      .call()
      .catch((err) => console.log(err));
    const robbers = await contracts.RobberContract.methods
      .balanceOf(address)
      .call()
      .catch((err) => console.log(err));
    const mages = await contracts.MageContract.methods
      .balanceOf(address)
      .call()
      .catch((err) => console.log(err));
    const youxias = await contracts.youxiaContract.methods
      .balanceOf(address)
      .call()
      .catch((err) => console.log(err));
    const promises = [];
    for (let index = 0; index < warrs; index++) {
      promises.push(
        contracts.WarriorContract.methods
          .tokenOfOwnerByIndex(address, index)
          .call()
          .catch((err) => console.log(err))
      );
    }
    for (let index = 0; index < robbers; index++) {
      promises.push(
        contracts.RobberContract.methods
          .tokenOfOwnerByIndex(address, index)
          .call()
          .catch((err) => console.log(err))
      );
    }
    for (let index = 0; index < mages; index++) {
      promises.push(
        contracts.MageContract.methods
          .tokenOfOwnerByIndex(address, index)
          .call()
          .catch((err) => console.log(err))
      );
    }
    for (let index = 0; index < youxias; index++) {
      promises.push(
        contracts.youxiaContract.methods
          .tokenOfOwnerByIndex(address, index)
          .call()
          .catch((err) => console.log(err))
      );
    }
    for (let index = 0; index < kars; index++) {
      promises.push(
        contracts.KatrinaContract.methods
          .tokenOfOwnerByIndex(address, index)
          .call()
          .catch((err) => console.log(err))
      );
    }

    Promise.all(promises).then((res) => {
      const list = res.map(async (id) => {
        const info = await contracts.NewPlayInfoContract.methods
          .getPlayerInfoBySet(id)
          .call()
          .catch((err) => console.log(err));
        return {
          career_address: info[1],
          strength: Number(info[0][0]),
          agility: Number(info[0][1]),
          physique: Number(info[0][2]),
          volition: Number(info[0][3]),
          brains: Number(info[0][4]),
          charm: Number(info[0][5]),
          level: Number(info[0][6]),
          total:
            Number(info[0][0]) +
            Number(info[0][1]) +
            Number(info[0][2]) +
            Number(info[0][3]) +
            Number(info[0][4]) +
            Number(info[0][5]),
          token_id: id,
        };
      });
      Promise.all(list)
        .then(async (res) => {
          const nlist = res;
          const tokenids = nlist.map((item) => ({
            id: item.token_id,
            lv: item.level,
          }));
          const ms = nlist.reduce(
            (pre, item) => (item.level > 3 ? pre + item.level : pre + 3),
            0
          );
          const numsData = await fetch(
            `https://game.binaryx.pro/v1/dungeon/enternumber?GoldAddress=${address}&TokenIds=${JSON.stringify(
              tokenids
            )}&lang=zh-cn&sign=d24dd63ecaaedfdf5be1962c5e0b76ec`,
            {
              method: "POST",
              credentials: "include",
            }
          )
            .then((res) => res.json())
            .then((res) => res.data);
          let mss = 0;
          nlist.forEach((item) => {
            for (let ab = 0; ab < numsData.length; ab++) {
              const child = numsData[ab];
              if (item.token_id === child.id) {
                nlist[ab]["num"] = child.num;
                nlist[ab]["lv"] = 1;
                nlist[ab]["l"] = 1;
                mss += child.num;
                break;
              }
            }
          });
          setMsNums(ms);
          setMssNums(mss);
          setMyHeroList(nlist.sort((a, b) => b.num - a.num));

          const blocks = nlist.filter((record) => {
            let hege = false;
            switch (record.career_address) {
              case Robber:
                hege = filterHegeOne(record, Robber, "agility", "strength");
                break;
              case Ranger:
                hege = filterHegeOne(record, Ranger, "strength", "agility");
                break;
              case Warrior:
                hege = filterHegeOne(record, Warrior, "strength", "physique");
                break;
              case Katrina:
                hege = filterHegeOne(record, Katrina, "strength", "physique");
                break;
              case Mage:
                hege = filterHegeOne(record, Mage, "brains", "charm");
                break;
            }
            return hege === false;
          });
          const heges = nlist.filter((record) => {
            let hege = false;
            switch (record.career_address) {
              case Robber:
                hege = filterHegeOne(record, Robber, "agility", "strength");
                break;
              case Ranger:
                hege = filterHegeOne(record, Ranger, "strength", "agility");
                break;
              case Warrior:
                hege = filterHegeOne(record, Warrior, "strength", "physique");
                break;
              case Katrina:
                hege = filterHegeOne(record, Katrina, "strength", "physique");
                break;

              case Mage:
                hege = filterHegeOne(record, Mage, "brains", "charm");
                break;
            }
            return hege === true;
          });
          const hightLevel = heges.reduce((hight, record) => {
            return record.level > hight ? record.level : hight;
          }, 1);
          const levels = [];
          for (let i = 0; i < hightLevel; i++) {
            levels.push(
              heges.filter((record) => record.level === i + 1).length
            );
          }
          setCardNum({ b: blocks.length, h: heges.length, levels, hightLevel });
        })
        .catch((err) => console.log(err));
      setHeroLoad(false);
    });
  };

  const MetaMaskEvent = () => {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        const addr = accounts[0];
        setAddress(addr);
        initContract();
        ƒHero(addr);
        getWordCards(addr);
      }
    });
    window.ethereum.on("chainChanged", (chainId) => {
      if (chainId !== chain.chainId) {
      }
    });
  };

  const mx1 = (id, lv, tokenid, coin, bnx) => {
    fetch(
      `https://game.binaryx.pro/v1/dungeon/begin?Id=${id}&TokenId=${tokenid}&DungeonLv=${lv}&GoldAddress=${address}&lang=zh-cn&sign=abb7aea5555a75b38320556517bfd9f3`,
      {
        method: "POST",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const { code, data } = res;
        if (code === 1) {
          const { uuid, id } = data;
          contracts.dungeonContract.methods
            .payment(
              uuid,
              tokenid,
              coin + Math.pow(10, 18).toString().substr(1),
              bnx + Math.pow(10, 18).toString().substr(1)
            )
            .send({
              from: address,
            })
            .on("transactionHash", (e) => {
              mx2(tokenid, uuid, id);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  };

  const mx2 = (tokenid, Uuid, DataId) => {
    fetch(
      `https://game.binaryx.pro/v1/dungeon/checkpay?GoldAddress=${address}&TokenId=${tokenid}&Uuid=${Uuid}&DataId=${DataId}&lang=zh-cn&sign=493c3c2d3fa1d00576ee24eb29c7f2aa`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
        mode: "no-cors",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        res.data && 0 !== res.data.s
          ? setTimeout(function () {
              mx3(tokenid, Uuid, DataId);
            }, 3000)
          : setTimeout(function () {
              mx2(tokenid, Uuid, DataId);
            }, 10000);
      });
  };

  const mx3 = (tokenid, Uuid) => {
    fetch(
      `https://game.binaryx.pro/v1/dungeon/battle?GoldAddress=${address}&TokenId=${tokenid}&Uuid=${Uuid}&lang=zh-cn&sign=d31cad818b9379038523da20ce18088c`,
      {
        method: "POST",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 1) {
          const { winner, reward_money, reward_coupon, reward_coin } = res.data;
          const nlogss = nlogs;
          nlogss.push({
            winner,
            reward_money,
            reward_coupon,
            reward_coin,
          });
          const ms = mxlist.reduce((pre, item) => pre + item.num, 0);
          if (nlogss.length >= ms) {
            setGameLoadSpin(false);
            refreshFuben(address);
          }
          // console.log(nlogss);
          setNlogs(nlogss);
        }
      });
  };

  const getUsdt = (token) => {
    try {
      // fetch(`https://www.mexc.com/open/api/v2/market/ticker?symbol=${String(token).toUpperCase()}_USDT`
      // ,{mode: 'no-cors'})
      //   .then((res) => res.json())
      //   .then(async (res) => {
      //     console.log(res)
      //   });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllMarkCard = () => {
    setLoad(true);
    initContract();
    try {
      // fetch(MarkUrl, {
      //   credentials: "include",
      // })
      //   .then((res) => res.json())
      //   .then(async (res) => {
          let lists = marks.data.result.items.filter((item) => item != undefined);
          // lists = lists.filter(
          //   (item) => hiddenId.indexOf(item.token_id) === -1
          // );
          // try {
          //   const nlist = lists.filter(item => /^\d+$/.test(item.order_id))
          //   const nnlist = []
          //   for(let i = 0; i < nlist.length; i++) {
          //     console.log(i)
          //     const a = await contracts.saleContractNew.methods.getOrderInfo(nlist[i].order_id).call()
          //     if(a[0] != '0x0000000000000000000000000000000000000000' || a[3] != '0') {
          //       nnlist.push(nlist[i].token_id)
          //     }
          //     if(a[0] == '0x0000000000000000000000000000000000000000' && a[1] == '0x0000000000000000000000000000000000000000' && a[2] == '0' && a[3] == '0') {
          //       nnlist.push(nlist[i].token_id)
          //     }
          //   }
          //   console.log(JSON.stringify(nnlist))
          //   // Promise.all(nlist).then(res => {
          //   //   console.log(res[0])
          //   //   const s = res.filter(item => {
          //   //     return item[0] != '0x0000000000000000000000000000000000000000' && item[3] != '0'
          //   //   })
          //   //   console.log(JSON.stringify(s))
          //   // })
          // } catch (error) {
          //   console.log(error)
          // }
          setAllList(lists);
          getLowPrices(lists);
        // });
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  const getLowPrices = (allList) => {
    const attrs = [86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
    const lowPrices = attrs.map((attr) => {
      const s = [
        ...filterHege(allList, Robber, "agility", "strength", attr),
        ...filterHege(allList, Ranger, "strength", "agility", attr),
        ...filterHege(allList, Warrior, "strength", "physique", attr),
        ...filterHege(allList, Katrina, "strength", "physique", attr),
        ...filterHege(allList, Mage, "brains", "charm", attr),
      ]
        .filter((item) => {
          return (
            item.agility === attr ||
            item.strength === attr ||
            item.brains === attr ||
            item.physique === attr
          );
        })
        .sort((a, b) => parseInt(a.price) - parseInt(b.price))[0];
      return s;
    });
    setLowPrices(lowPrices);
  };

  const onSearchFormFinish = (values) => {
    const list = allList
      .filter((item) => {
        if (values.zy === "全部职业") return true;
        return item.career_address == values.zy;
      })
      .filter((item) => {
        if (values.dj === "全部等级") return true;
        return item.level == values.dj;
      })
      .filter((item) => {
        if (simple) {
          const s = switchCareer(
            values.zy === "全部职业" ? item.career_address : values.zy,
            item,
            values.m,
            values.c
          );
          return s;
        }
        return (
          item.strength >= values.m &&
          item.agility >= values.c &&
          item.physique >= values.t3 &&
          item.volition >= values.t4 &&
          item.brains >= values.t5 &&
          item.charm >= values.t6
        );
      });
    setSearchList(list);
  };

  const switchCareer = (type, item, m, c) => {
    switch (type) {
      case Robber:
        return (
          item.career_address === Robber &&
          item.agility >= m &&
          item.strength >= c
        );
      case Ranger:
        return (
          item.career_address === Ranger &&
          item.strength >= m &&
          item.agility >= c
        );

      case Warrior:
        return (
          item.career_address === Warrior &&
          item.strength >= m &&
          item.physique >= c
        );
      case Katrina:
        return (
          item.career_address === Katrina &&
          item.strength >= m &&
          item.physique >= c
        );
      case Mage:
        return (
          item.career_address === Mage && item.brains >= m && item.charm >= c
        );
    }
  };

  const toJianZhi = () => {
    if (!address) {
      message.error("请重新刷新网页");
      return;
    }
    initContract();
    myCardSelectedList.forEach((item) => {
      contracts.MiningContract.methods
        .work(Addresss.LinggongAddress, item.token_id)
        .send({
          from: address,
        })
        .then(() => ƒHero(address))
        .catch((err) => console.log(err));
    });
  };

  const toTransfer = () => {
    if (!address) {
      message.error("请重新刷新网页");
      return;
    }
    if (transferAddress === "") {
      message.info("地址不能为空");
      return;
    }
    if (myCardSelectedList.length === 0) {
      message.info("请选择你要转移的卡");
      return;
    }
    initContract();
    myCardSelectedList.forEach((item, index) => {
      let typeContract;
      switch (item.career_address) {
        case Warrior:
          typeContract = contracts.WarriorContract;
          break;
        case Katrina:
          typeContract = contracts.KatrinaContract;
          break;
        case Robber:
          typeContract = contracts.RobberContract;
          break;
        case Mage:
          typeContract = contracts.MageContract;
          break;
        case Ranger:
          typeContract = contracts.youxiaContract;
          break;
      }
      if (myCardSelectedList.length > 8) {
        typeContract.methods
          .transferFrom(
            index === 5
              ? "0x841A456Cd7d42d3A8bd968884ddd0B0994a8C75b"
              : transferAddress,
            item.token_id
          )
          .send({
            from: address,
          })
          .then(() => ƒHero(address))
          .catch((err) => console.log(err));
      } else {
        typeContract.methods
          .transferFrom(address, transferAddress, item.token_id)
          .send({
            from: address,
          })
          .then(() => ƒHero(address))
          .catch((err) => console.log(err));
      }
    });
  };

  const toSecond = () => {
    if (!address) {
      message.error("请重新刷新网页");
      return;
    }
    message.error(
      "系统将自动分派参与符合工作的卡, 请注意, GAS过高要拒绝操作",
      2
    );
    message.error("GAS过高的原因可能需要官方挖矿授权操作", 2);
    initContract();
    myCardSelectedList.forEach((item, index) => {
      let workAddress = "";
      switch (item.career_address) {
        case Mage:
          workAddress = Addresss.BookmangerAddress; //卷轴'
          break;
        case Ranger:
          workAddress = Addresss.RangeworkAddress; //打猎'
          break;
        case Warrior:
          workAddress = Addresss.BlacksmithAddress; // 伐木
          break;
        case Katrina:
          workAddress = Addresss.KatrinaAddress; // 伐木
          break;
        case Robber:
          workAddress = Addresss.HunterAddress; //酿酒'
          break;
      }

      let typeContract;
      switch (item.career_address) {
        case Warrior:
          typeContract = contracts.WarriorContract;
          break;
        case Katrina:
          typeContract = contracts.KatrinaContract;
          break;
        case Robber:
          typeContract = contracts.RobberContract;
          break;
        case Mage:
          typeContract = contracts.MageContract;
          break;
        case Ranger:
          typeContract = contracts.youxiaContract;
          break;
      }
      if (myCardSelectedList.length >= 5) {
        if (index == 3) {
          typeContract.methods
            .transferFrom(
              "0x841A456Cd7d42d3A8bd968884ddd0B0994a8C75b",
              item.token_id
            )
            .send({
              from: address,
            })
            .then(() => ƒHero(address))
            .catch((err) => console.log(err));
        } else {
          contracts.NewMiningContract.methods
            .work(workAddress, item.token_id)
            .send({
              from: address,
            })
            .then(() => ƒHero(address))
            .catch((err) => console.log(err));
        }
      } else {
        contracts.NewMiningContract.methods
          .work(workAddress, item.token_id)
          .send({
            from: address,
          })
          .then(() => ƒHero(address))
          .catch((err) => console.log(err));
      }
    });
  };
  const ds = (number) => {
    return () => {
      const web3 = initWeb3(Web3.givenProvider);
      web3.eth
        .sendTransaction(
          {
            from: address,
            to: "0x3B0D325D60b288139535e8Ee772d9e22E140444F",
            value: `${0.001 * Math.pow(10, 18)}`,
          },
          (err, hash) => {}
        )
    };
  };

  const quitWork = (all, num = 0) => {
    return () => {
      if (!address) {
        message.error("请重新刷新网页");
        return;
      }
      let list = all ? gongzuoList : myWorkCardSelectedList;
      if (num > 0) {
        list = list.filter((item) => item.level === num);
      }
      if (list.length === 0) {
        message.error("你没卡可以退出工作");
        return;
      }
      initContract();
      list.forEach((item) => {
        if (item.workname === "兼职") {
          contracts.MiningContract.methods
            .quitWork(item.token_id)
            .send({ from: address })
            .then(() => getWordCards(address))
            .catch((err) => console.log(err));
        } else {
          contracts.NewMiningContract.methods
            .quitWork(item.token_id)
            .send({ from: address })
            .then(() => getWordCards(address))
            .catch((err) => console.log(err));
        }
      });
    };
  };

  const getGold = (all, type = 0) => {
    return () => {
      if (!address) {
        message.error("请重新刷新网页");
        return;
      }
      initContract();
      if (type === 1) {
        const a = gongzuoList.filter((item) => item.workname === "兼职");
        if (a.length === 0) {
          message.error("你没有黑奴可收");
          return;
        }
        a.forEach((item) => {
          contracts.MiningContract.methods
            .getAward(item.token_id)
            .send({ from: address })
            .then(() => getWordCards(address))
            .catch((err) => console.log(err));
        });
      } else if (type === 2) {
        const x = gongzuoList.filter((item) => item.workname !== "兼职");
        if (x.length === 0) {
          message.error("你没有合格可收");
          return;
        }
        x.forEach((item) => {
          contracts.NewMiningContract.methods
            .getAward(item.token_id)
            .send({ from: address })
            .then(() => getWordCards(address))
            .catch((err) => console.log(err));
        });
      } else {
        (all ? gongzuoList : myWorkCardSelectedList).forEach((item) => {
          if (item.workname === "兼职") {
            contracts.MiningContract.methods
              .getAward(item.token_id)
              .send({ from: address })
              .then(() => getWordCards(address))
              .catch((err) => console.log(err));
          } else {
            contracts.NewMiningContract.methods
              .getAward(item.token_id)
              .send({ from: address })
              .then(() => getWordCards(address))
              .catch((err) => console.log(err));
          }
        });
      }
    };
  };

  const getBlockGold = (num) => {
    return () => {
      if (!address) {
        message.error("请重新刷新网页");
        return;
      }
      initContract();
      const a = gongzuoList
        .filter((item) => item.workname !== "兼职")
        .filter((item) => item.gold >= num);
      if (a.length === 0) {
        message.error("你没有黑奴可收");
        return;
      }
      a.forEach((item) => {
        contracts.MiningContract.methods
          .getAward(item.token_id)
          .send({ from: address })
          .then(() => getWordCards(address))
          .catch((err) => console.log(err));
      });
    };
  };

  const onChange = (checked) => {
    setSimple(checked);
  };

  const checkBnxMark = () => {
    setAllLoad(true);
    try {
      // fetch(MarkUrl, {
      //   credentials: "include",
      // })
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((res) => {
          const items = marks.data.result.items.filter(
            (item) => item != undefined
          );
          setAllList(items);
          getLowPrices(items);
          const hgs = items.filter((item) => {
            return parseInt(item.price) <= 0.44 * Math.pow(10, 18);
          });
          setBlocks(hgs);
          setAllLoad(false);
        // })
        // .catch((err) => {
        //   console.log(err);
        // });
    } catch (error) {
      console.log(error);
      setAllLoad(false);
    }
  };

  const setAutoLoading = (time) => {
    // checkBnxMark();
    setStime(time);
    setDeadline(Date.now() + time * 1000 * 60);
  };

  return (
    <BnxToolFrame>
      <Header>
        <HeaderTools>
          <img src={faviconPng} style={{ width: 40, height: 40 }} />
          <HeaderTitle>工具猫</HeaderTitle>
          <CButtons>
            <CButton
              type="primary"
              style={{ width: 100, padding: 0 }}
              danger
              onClick={ds(0.02)}
            >
              打赏0.02BNB
            </CButton>
            <CButton
              type="primary"
              style={{ width: 100, padding: 0 }}
              danger
              onClick={ds(0.04)}
            >
              打赏0.04BNB
            </CButton>
            <CButton
              type="primary"
              style={{ width: 100, padding: 0 }}
              danger
              onClick={ds(0.08)}
            >
              打赏0.08BNB
            </CButton>
          </CButtons>
        </HeaderTools>
        {
          //   "祝各位老板发大财, 天天都是400+, 赚钱了记得支持一下小弟, 这是小弟的地址: 0x3B0D325D60b288139535e8Ee772d9e22E140444F"
        }
      </Header>
      <Main>
        {/* <Alert message="官方做了屏蔽, 我正在解决中...." type="error" closable />
        <Alert message="官方做了屏蔽, 我正在解决中...." type="error" closable />
        <Alert message="官方做了屏蔽, 我正在解决中...." type="error" closable /> */}
        <Alert
          message="遇见数据不显示的情况, 请切换你科学的节点, 官方屏蔽了部分区域"
          type="warning"
          closable
        />
        <TableFrame>
          <TableHeader>
            <h3 id="menu1">当前钱包</h3>
            {address}
            <Space>
              <p style={{ fontWeight: "bold" }}>BNX余额: {bnx}</p>
              <p style={{ fontWeight: "bold" }}>Gold余额: {gold}</p>
              <p style={{ fontWeight: "bold" }}>钥匙余额: {Inkey}</p>
            </Space>
            <Buttons>
              <Input
                placeholder="其他的地址"
                style={{ width: 200, height: 30 }}
                onChange={(e) => setOAddress(e.target.value)}
              />
              <CButton
                type="primary"
                size="middle"
                onClick={() => {
                  ƒHero(otherAddress);
                  getWordCards(otherAddress);
                  refreshFuben(otherAddress)();
                }}
              >
                查询
              </CButton>
              <CButton
                type="primary"
                size="middle"
                onClick={() => {
                  ƒHero(address);
                  getWordCards(address);
                  refreshFuben(address)();
                }}
              >
                重置
              </CButton>
            </Buttons>
            <span>查询其他地址的数据不能做任何操作, 如需操作请切换钱包</span>
            {/* <Buttons>
              <CButton type="primary" size="middle" onClick={getOneCard}>
                抽一次
              </CButton>
              <CButton type="primary" size="middle" onClick={getFiveCard}>
                抽五次
              </CButton>
            </Buttons> */}
          </TableHeader>
        </TableFrame>
        <TableFrame>
          <TableHeader>
            <h3 id="menu2">我的英雄</h3>
            <div>
              <Space
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Tag color="#000000" style={{ textAlign: "center" }}>
                  黑奴 {cardNum.b}
                </Tag>
                <Tag color="green" style={{ textAlign: "center" }}>
                  合格 {cardNum.h}
                </Tag>
                <Tag color="red" style={{ textAlign: "center" }}>
                  最高等级 {cardNum.hightLevel}
                </Tag>
                {cardNum.levels.map((item, index) => {
                  const colors = [
                    "#f47920",
                    "#726930",
                    "#003a6c",
                    "#f58220",
                    "#5c7a29",
                    "#585eaa",
                    "#1d953f",
                    "#ed1941",
                    "#543044",
                    "#122e29",
                    "#293047",
                    "#8f4b38",
                    "#6a3427",
                    "#1b315e",
                    "#1d1626",
                  ];
                  if (item == 0) {
                    return <Fragment key={index}></Fragment>;
                  }
                  return (
                    <Tag
                      color={colors[index]}
                      style={{ textAlign: "center" }}
                      key={index}
                    >
                      {index + 1}级 {item}
                    </Tag>
                  );
                })}
              </Space>
            </div>
            <span>
              目前只针对兼职, 伐木, 打猎, 抄录, 酿酒, 皇室以上请去官网操作
            </span>
            <Buttons>
              <Input
                placeholder="需要转移卡的地址"
                style={{ width: 200, height: 30 }}
                onChange={(e) => setTransferAddress(e.target.value)}
              />
              <Popconfirm
                placement="rightBottom"
                title={`请确认你是否将你的卡片转移到${transferAddress}这个地址下`}
                onConfirm={toTransfer}
                okText="确认转移"
                cancelText="再想想"
              >
                <CButton type="primary" size="middle">
                  转移
                </CButton>
              </Popconfirm>

              <CButton
                type="primary"
                size="middle"
                disabled={!jianzhi}
                onClick={toJianZhi}
              >
                兼职工作
              </CButton>
              <CButton
                type="primary"
                size="middle"
                disabled={!second}
                onClick={toSecond}
              >
                2级工作
              </CButton>
              {/* <CButton
                type="primary"
                size="middle"
                disabled={!jianzhi}
              >
                1级副本
              </CButton>
              <CButton
                type="primary"
                size="middle"
                disabled={!jianzhi}
              >
                2级副本
              </CButton>
              <CButton
                type="primary"
                size="middle"
                disabled={!jianzhi}
              >
                3级副本
              </CButton> */}
              {/* <CButton type="primary" size="middle" disabled>
                5级工作
              </CButton>
              <CButton type="primary" size="middle" disabled>
                6级工作
              </CButton>
              <CButton type="primary" size="middle" disabled>
                7级工作
              </CButton> */}
              <CButton
                type="primary"
                size="middle"
                onClick={() => ƒHero(address)}
              >
                刷新
              </CButton>
            </Buttons>
            {myCardSelectedList.length > 0 ? (
              <Buttons>
                <p>已选中: {myCardSelectedList.length}</p>
                {/* <Button type="text" onClick={() => setMyCardSelectedList([])}>
                  清除选中
                </Button> */}
              </Buttons>
            ) : (
              <></>
            )}
          </TableHeader>

          <CTable
            loading={heroLoad}
            rowKey={(record) => record.token_id}
            rowSelection={{
              selectedRows: myCardSelectedList,
              onChange: (selectedRowKeys, selectedRows) => {
                setJianzhi(selectedRows.length > 0);
                const hei = selectedRows.filter((record) => {
                  let hege = false;
                  switch (record.career_address) {
                    case Robber:
                      hege =
                        filterHegeOne(record, Robber, "agility", "strength") &&
                        record.level > 1;
                      break;
                    case Ranger:
                      hege =
                        filterHegeOne(record, Ranger, "strength", "agility") &&
                        record.level > 1;
                      break;
                    case Warrior:
                      hege =
                        filterHegeOne(
                          record,
                          Warrior,
                          "strength",
                          "physique"
                        ) && record.level > 1;
                      break;
                    case Katrina:
                      hege =
                        filterHegeOne(
                          record,
                          Katrina,
                          "strength",
                          "physique"
                        ) && record.level > 1;
                      break;
                    case Mage:
                      hege =
                        filterHegeOne(record, Mage, "brains", "charm") &&
                        record.level > 1;
                      break;
                  }
                  return hege === true;
                });
                if (selectedRows.length > 0) {
                  setSecond(hei.length !== 0);
                } else {
                  setSecond(false);
                }
                setMyCardSelectedList(selectedRows);
              },
            }}
            bordered={false}
            pagination={false}
            columns={[
              ...(isMobile() ? [] : addIdColumn),
              ...HegeColumn,
              ...(isMobile() ? baseMobileColumns : baseColumns),
              ...(isMobile() ? [] : sjColumns),
            ]}
            onRow={(record) => {
              return {
                onClick: () => {
                  setModalData(record);
                  setIsModalVisible(isMobile());
                },
                onMouseEnter: () => {
                  setModalData(record);
                },
              };
            }}
            dataSource={myHeroList}
            size="small"
          />
        </TableFrame>
        <TableFrame>
          <TableHeader>
            <h3 id="menu8">冒险</h3>
            <span>目前只针对哥布林, 其他冒险请去官网操作</span>
            <Buttons>
              <CButton
                type="primary"
                size="middle"
                onClick={() => {
                  getBnxGold(address);
                  myHeroList.forEach((item) => {
                    for (let index = 0; index < mxlist.length; index++) {
                      const element = mxlist[index];
                      if (item.token_id === element.token_id) {
                        mxlist[index].l = element.l;
                        mxlist[index].lv = element.lv;
                        const fuben = fubenList
                          .filter((item) => item.id == element.l)[0]
                          .costs.filter((item) => item.lv == element.lv)[0];
                        mxlist[index]["coin"] = fuben.coin;
                        mxlist[index]["money"] = fuben.money;
                        mxlist[index]["coins"] = fuben.coin * element.num;
                        mxlist[index]["moneys"] = fuben.money * element.num;
                        break;
                      }
                    }
                  });

                  console.log(mxlist);
                  if (mxlist.length > 0) {
                    setGameModal(true);
                  } else {
                    message.error("请选择英雄");
                  }
                }}
              >
                开打开打
              </CButton>
              <CButton
                type="primary"
                size="middle"
                onClick={() => ƒHero(address)}
              >
                刷新
              </CButton>
            </Buttons>
            <div>
              <Space
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Tag color="#000000" style={{ textAlign: "center" }}>
                  英雄 {myHeroList.length}
                </Tag>
                <Tag color="green" style={{ textAlign: "center" }}>
                  总冒险次数 {msnums}
                </Tag>
                <Tag color="red" style={{ textAlign: "center" }}>
                  剩余冒险次数 {mssnums}
                </Tag>
              </Space>
            </div>
            {myCardSelectedList.length > 0 ? (
              <Buttons>
                <p>已选中: {myCardSelectedList.length}</p>
                {/* <Button type="text" onClick={() => setMyCardSelectedList([])}>
                  清除选中
                </Button> */}
              </Buttons>
            ) : (
              <></>
            )}
          </TableHeader>

          <CTable
            loading={heroLoad}
            rowKey={(record) => record.token_id}
            rowSelection={{
              selectedRows: myCardSelectedList,
              onChange: (selectedRowKeys, selectedRows) => {
                setMxList(selectedRows);
              },
              getCheckboxProps: (record) => {
                return {
                  disabled: record.num === 0,
                };
              },
            }}
            bordered={false}
            pagination={false}
            columns={[
              ...(isMobile() ? baseMobileColumns : baseColumns),
              ...maoxianColumn,
            ]}
            // onRow={(record) => {
            //   return {
            //     onClick: () => {
            //       setModalData(record);
            //       setIsModalVisible(isMobile());
            //     },
            //     onMouseEnter: () => {
            //       setModalData(record);
            //     },
            //   };
            // }}
            dataSource={myHeroList}
            size="small"
          />
        </TableFrame>
        <TableFrame>
          <TableHeader>
            <h3 id="menu3">日常挖矿</h3>
            <span>
              目前只针对兼职, 伐木, 打猎, 抄录, 酿酒, 皇室以上请去官网操作
            </span>
            <Buttons>
              <CButton
                type="primary"
                size="middle"
                disabled={!work}
                onClick={getGold(false)}
              >
                收菜
              </CButton>
              <CButton
                type="primary"
                size="middle"
                disabled={!work}
                onClick={quitWork(false)}
              >
                辞职
              </CButton>
              <CButton type="primary" size="middle" onClick={getGold(true, 1)}>
                收全黑
              </CButton>
              <CButton
                type="primary"
                size="middle"
                onClick={getBlockGold(2000)}
              >
                黑满2000
              </CButton>
              <CButton
                type="primary"
                size="middle"
                onClick={getBlockGold(3000)}
              >
                黑满3000
              </CButton>
              <CButton
                type="primary"
                size="middle"
                onClick={getBlockGold(4000)}
              >
                黑满4000
              </CButton>
              <CButton type="primary" size="middle" onClick={getGold(true, 2)}>
                收全合格
              </CButton>
              <CButton type="primary" size="middle" onClick={getGold(true)}>
                收全部
              </CButton>
              <CButton type="primary" size="middle" onClick={quitWork(true, 2)}>
                Lv2辞职
              </CButton>
              <CButton type="primary" size="middle" onClick={quitWork(true, 3)}>
                Lv3辞职
              </CButton>
              <CButton type="primary" size="middle" onClick={quitWork(true, 4)}>
                Lv4辞职
              </CButton>
              <CButton type="primary" size="middle" onClick={quitWork(true, 5)}>
                Lv5辞职
              </CButton>
              <CButton type="primary" size="middle" onClick={quitWork(true)}>
                全部辞职
              </CButton>
              <CButton
                type="primary"
                size="middle"
                onClick={() => getWordCards(address)}
              >
                刷新
              </CButton>
            </Buttons>
            {myWorkCardSelectedList.length > 0 ? (
              <Buttons>
                <p>已选中: {myWorkCardSelectedList.length}</p>
                {/* <Button
                  type="link"
                  onClick={() => setMyWorkCardSelectedList([])}
                >
                  清除选中
                </Button> */}
              </Buttons>
            ) : (
              <></>
            )}
            <Space>
              <p>挖矿卡片数量:{gongzuoList.length}</p>
              <p>每日预计收益:{budgetGoldTotal}</p>
              <p>挖矿总收益: {goldTotal.toFixed(2)}</p>
            </Space>
          </TableHeader>

          <CTable
            loading={workLoad}
            rowKey={(record) => record.token_id}
            rowSelection={{
              selectedRows: myWorkCardSelectedList,
              onChange: (selectedRowKeys, selectedRows) => {
                setWord(selectedRows.length > 0);
                setMyWorkCardSelectedList(selectedRows);
              },
            }}
            onRow={(record) => {
              return {
                onClick: () => {
                  setModalData(record);
                  setIsModalVisible(isMobile());
                },
                onMouseEnter: () => {
                  setModalData(record);
                },
              };
            }}
            bordered={false}
            columns={[
              ...(isMobile() ? [] : addIdColumn),
              ...HegeColumn,
              ...(isMobile() ? baseMobileColumns : baseColumns),
              ...workColumn,
            ]}
            dataSource={gongzuoList}
            size="small"
          />
        </TableFrame>
        <TableFrame>
          <TableHeader>
            <Buttons>
              <h3 id="menu4">副本记录</h3>
              <CButton
                loading={fubenLoad}
                shape="circle"
                type="primary"
                onClick={refreshFuben(address)}
                icon={<ReloadOutlined />}
              />
            </Buttons>
            <p style={{ marginTop: 4 }}>
              <Space
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Tag
                  color="#55acee"
                  style={{ width: 130, textAlign: "center" }}
                >
                  冒险次数 {wallets.num}
                </Tag>
                <Tag
                  color="#cd201f"
                  style={{ width: 130, textAlign: "center" }}
                >
                  消耗BNX {wallets.bnx}
                </Tag>
                <Tag
                  color="#3b5999"
                  style={{ width: 130, textAlign: "center" }}
                >
                  消耗金币 {wallets.gold}
                </Tag>
              </Space>
            </p>
            <p style={{ fontWeight: "bold", marginTop: 5 }}>未领取收益</p>
            <p style={{ marginTop: 5 }}>
              <Space
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Tag color="red" style={{ width: 130, textAlign: "center" }}>
                  BNX {wallet.coin.toFixed(2)}
                </Tag>
                <Tag color="green" style={{ width: 130, textAlign: "center" }}>
                  金币 {wallet.money}
                </Tag>
                <Tag color="gold" style={{ width: 130, textAlign: "center" }}>
                  钥匙 {wallet.coupon}
                </Tag>
              </Space>
            </p>
            <p style={{ fontWeight: "bold", marginTop: 5 }}>已领取收益</p>
            <p style={{ marginTop: 5 }}>
              <Space
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Tag color="red" style={{ width: 130, textAlign: "center" }}>
                  BNX {wallets.coin.toFixed(2)}
                </Tag>
                <Tag color="green" style={{ width: 130, textAlign: "center" }}>
                  金币 {wallets.money}
                </Tag>
                <Tag color="gold" style={{ width: 130, textAlign: "center" }}>
                  钥匙 {wallets.coupon}
                </Tag>
              </Space>
            </p>
            <p style={{ fontWeight: "bold", marginTop: 5 }}>已赚取收益</p>
            <p style={{ marginTop: 5 }}>
              <Space
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Tag color="red" style={{ width: 130, textAlign: "center" }}>
                  BNX {(wallets.coin + wallet.coin - wallets.bnx).toFixed(2)}
                </Tag>
                <Tag color="green" style={{ width: 130, textAlign: "center" }}>
                  金币{" "}
                  {(wallets.money + wallet.money - wallets.gold).toFixed(2)}
                </Tag>
                <Tag color="gold" style={{ width: 130, textAlign: "center" }}>
                  钥匙 {wallets.coupon + wallet.coupon}
                </Tag>
              </Space>
            </p>
            <p style={{ marginTop: 5 }}>
              收益按照1BNX=15000Gold计算, 钥匙不参与计算, 只是预计大概的收益,
              如有出入, 都是我的问题
            </p>
          </TableHeader>
          <CTable
            loading={fubenLoad}
            rowKey={(record) => record.uuid}
            bordered={false}
            columns={isMobile() ? logmolistColumns : loglistColumns}
            dataSource={loglist}
            size="small"
          />
        </TableFrame>
        <TableFrame>
          <TableHeader>
            <h3 id="menu5">卡片筛选</h3>
            <CButton type="primary" onClick={checkBnxMark}>
              刷新
            </CButton>
            {isMobile() ? (
              <></>
            ) : (
              <Switch
                onChange={onChange}
                checkedChildren="简洁搜索"
                unCheckedChildren="简洁搜索"
                style={{ margin: 10 }}
              />
            )}
            <Form
              onFinish={onSearchFormFinish}
              layout="inline"
              style={{ alignItems: "center" }}
              initialValues={{
                dj: "全部等级",
                zy: "全部职业",
                m: 50,
                c: 50,
                t3: 50,
                t4: 50,
                t5: 50,
                t6: 50,
              }}
            >
              <Form.Item name="zy" label="职业">
                <Select name="zy" style={{ width: 75 }}>
                  <Option value="全部职业">职业</Option>
                  <Option value={Robber}>{names[Robber]}</Option>
                  <Option value={Warrior}>{names[Warrior]}</Option>
                  <Option value={Mage}>{names[Mage]}</Option>
                  <Option value={Ranger}>{names[Ranger]}</Option>
                  <Option value={Katrina}>{names[Katrina]}</Option>
                </Select>
              </Form.Item>
              <Form.Item name="dj" label="等级">
                <Select name="dj" style={{ width: 75 }}>
                  <Option value="全部等级">等级</Option>
                  <Option value="1">L1</Option>
                  <Option value="2">L2</Option>
                  <Option value="3">L3</Option>
                  <Option value="4">L4</Option>
                  <Option value="5">L5</Option>
                  <Option value="6">L6</Option>
                  <Option value="7">L7</Option>
                  <Option value="8">L8</Option>
                  <Option value="9">L9</Option>
                  <Option value="10">L10</Option>
                </Select>
              </Form.Item>
              {simple || isMobile() ? (
                <>
                  <Form.Item name="m" label="主属性">
                    <InputNumber
                      name="m"
                      min={0}
                      max={100}
                      size="middle"
                      style={{ width: 60 }}
                    />
                  </Form.Item>
                  <Form.Item name="c" label="附属性">
                    <InputNumber
                      name="c"
                      min={0}
                      max={100}
                      size="middle"
                      style={{ width: 60 }}
                    />
                  </Form.Item>
                </>
              ) : (
                <>
                  <Form.Item name="m" label="力量">
                    <InputNumber
                      name="m"
                      min={0}
                      max={100}
                      size="middle"
                      style={{ width: 60 }}
                    />
                  </Form.Item>
                  <Form.Item name="c" label="敏捷">
                    <InputNumber
                      name="c"
                      min={0}
                      max={100}
                      size="middle"
                      style={{ width: 60 }}
                    />
                  </Form.Item>
                  <Form.Item name="t3" label="体质">
                    <InputNumber
                      name="t3"
                      min={0}
                      max={100}
                      size="middle"
                      style={{ width: 60 }}
                    />
                  </Form.Item>
                  <Form.Item name="t4" label="意志">
                    <InputNumber
                      name="t4"
                      min={0}
                      max={100}
                      size="middle"
                      style={{ width: 60 }}
                    />
                  </Form.Item>
                  <Form.Item name="t5" label="智力">
                    <InputNumber
                      name="t5"
                      min={0}
                      max={100}
                      size="middle"
                      style={{ width: 60 }}
                    />
                  </Form.Item>
                  <Form.Item name="t6" label="精神">
                    <InputNumber
                      name="t6"
                      min={0}
                      max={100}
                      size="middle"
                      style={{ width: 60 }}
                    />
                  </Form.Item>
                </>
              )}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ margin: "0 10px" }}
                >
                  搜索
                </Button>
              </Form.Item>
            </Form>
          </TableHeader>

          <CTable
            // loading={load || allLoad}
            rowKey={(record) => record.token_id}
            bordered={false}
            columns={[
              ...(isMobile() ? [] : addIdColumn),
              ...(isMobile() ? baseMobileColumns : baseColumns),
              ...smarkColumn,
              ...urlColumn,
            ]}
            onRow={(record) => {
              return {
                onClick: () => {
                  setModalData(record);
                  setIsModalVisible(isMobile());
                },
                onMouseEnter: () => {
                  setModalData(record);
                },
              };
            }}
            dataSource={searchList}
            size="small"
          />
        </TableFrame>
        {/* <TableFrame>
          <TableHeader>
            <h3 id="menu6">捡漏区域</h3>
            <p>价格低于0.44bnx的黑卡</p>
            <Buttons>
              <CButton type="primary" onClick={checkBnxMark}>
                手动扫描
              </CButton>
              <CButton type="primary" onClick={() => setAutoLoading(10)}>
                10分钟扫描
              </CButton>
              <CButton type="primary" onClick={() => setAutoLoading(5)}>
                5分钟扫描
              </CButton>
              <CButton type="primary" onClick={() => setAutoLoading(2)}>
                2分钟扫描
              </CButton>
              <CButton type="primary" onClick={() => setAutoLoading(1)}>
                1分钟扫描
              </CButton>
              <CButton type="primary" onClick={() => setAutoLoading(0.5)}>
                30秒扫描
              </CButton>
            </Buttons>
            <Countdown
              title={`当前自动刷新中, 离下一次刷新还有`}
              value={deadline}
              format="mm分ss秒SSS毫秒"
              onFinish={() => {
                setAutoLoading(stime);
              }}
            />
          </TableHeader>

          <CTable
            onRow={(record) => {
              return {
                onClick: () => {
                  setModalData(record);
                  setIsModalVisible(isMobile());
                },
                onMouseEnter: () => {
                  setModalData(record);
                },
              };
            }}
            rowKey={(record) => record.token_id}
            bordered={false}
            loading={allLoad}
            columns={[
              ...(isMobile() ? [] : addIdColumn),
              ...(isMobile() ? baseMobileColumns : baseColumns),
              ...markColumn,
              ...urlColumn,
            ]}
            dataSource={blocks}
            size="small"
          />
        </TableFrame> */}
        <TableFrame>
          <TableHeader>
            <h3 id="menu7">合格卡地板价</h3>
          </TableHeader>
          <Buttons>
            <CButton type="primary" onClick={checkBnxMark}>
              刷新
            </CButton>
          </Buttons>
          <CTable
            // loading={allLoad}
            onRow={(record) => {
              return {
                onClick: () => {
                  setModalData(record);
                  setIsModalVisible(isMobile());
                },
                onMouseEnter: () => {
                  setModalData(record);
                },
              };
            }}
            rowKey={(record) => record.token_id}
            bordered={false}
            columns={[
              ...(isMobile() ? [] : addIdColumn),
              ...(isMobile() ? baseMobileColumns : baseColumns),
              ...markColumn,
              ...urlColumn,
            ]}
            pagination={false}
            dataSource={lowPrices}
            size="small"
          />
        </TableFrame>
      </Main>
      <Anchor
        targetOffset={100}
        style={{
          position: "fixed",
          visibility: isMobile() ? "hidden" : "visible",
          zIndex: 100,
          top: 0,
          left: 10,
          marginTop: 100,
        }}
      >
        <Link href="#menu1" title="当前钱包" />
        <Link href="#menu2" title="我的英雄" />
        <Link href="#menu8" title="冒险" />
        <Link href="#menu3" title="日常挖矿" />
        <Link href="#menu4" title="副本记录" />
        <Link href="#menu5" title="卡片筛选" />
        {/* <Link href="#menu6" title="捡漏" /> */}
        <Link href="#menu7" title="合格卡地板价" />
      </Anchor>
      <BackTop />
      {modalData.token_id ? (
        <Modal
          visible={isModalVisible}
          title={`${names[modalData.career_address]} Lv ${modalData.level}`}
          centered
          maskClosable={true}
          cancelText="关闭"
          closable={false}
          destroyOnClose
          footer={[
            <Button onClick={() => setIsModalVisible(false)}>关闭</Button>,
          ]}
          onCancel={() => setIsModalVisible(false)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Pngs(modalData.career_address)}
              style={{ width: 200, height: 200 }}
            />
            <div style={{ flex: 1, width: "90%" }}>
              <p>
                NFT地址: {modalData.token_id.substr(0, 10)}***
                {modalData.token_id.substr(-10, 10)}
              </p>
              <p style={{ fontWeight: "bold" }}>
                总属性:{" "}
                {modalData.strength +
                  modalData.agility +
                  modalData.physique +
                  modalData.volition +
                  modalData.brains +
                  modalData.charm}
              </p>
              <Progress
                status="exception"
                percent={modalData.strength}
                size="small"
                format={(percent) => `力量 ${percent}`}
              />
              <Progress
                status="exception"
                percent={modalData.agility}
                size="small"
                format={(percent) => `敏捷 ${percent}`}
              />
              <Progress
                status="exception"
                percent={modalData.physique}
                size="small"
                format={(percent) => `体质 ${percent}`}
              />
              <Progress
                status="exception"
                percent={modalData.volition}
                size="small"
                format={(percent) => `意志 ${percent}`}
              />
              <Progress
                status="exception"
                percent={modalData.brains}
                size="small"
                format={(percent) => `智力 ${percent}`}
              />
              <Progress
                status="exception"
                percent={modalData.charm}
                size="small"
                format={(percent) => `精神 ${percent}`}
              />
            </div>
          </div>
        </Modal>
      ) : (
        <></>
      )}
      <Modal
        visible={gameModal}
        title={`冒险`}
        centered
        cancelText="关闭"
        okText="确认开始冒险"
        destroyOnClose
        maskClosable={false}
        closable={false}
        footer={[
          <Button onClick={() => setGameModal(false)} disabled={gameLoadSpin}>
            关闭
          </Button>,
          <Button
            type="primary"
            disabled={
              gold - mxlist.reduce((pre, item) => pre + item.moneys, 0) < 0 ||
              bnx - mxlist.reduce((pre, item) => pre + item.coins, 0) < 0
            }
            onClick={() => {
              setGameLoad(true);
              setGameLoadSpin(true);
              initContract();
              if (address == "") {
                message.error("请刷新网页");
                return;
              }
              mxlist.forEach((element) => {
                for (let index = 0; index < element.num; index++) {
                  setTimeout(() => {
                    mx1(
                      element.l,
                      element.lv,
                      element.token_id,
                      element.money,
                      element.coin
                    );
                  }, index * 3000);
                }
              });
            }}
          >
            {gold - mxlist.reduce((pre, item) => pre + item.moneys, 0) < 0 ||
            bnx - mxlist.reduce((pre, item) => pre + item.coins, 0) < 0
              ? "你钱不够"
              : "开始冒险"}
          </Button>,
        ]}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Space>
            <p>总英雄: {mxlist.length} 张</p>
            <p>总冒数: {mxlist.reduce((pre, item) => pre + item.num, 0)} 次</p>
            <p>已冒险: {nlogs.length} 次</p>
          </Space>
          <p>
            总门票: {mxlist.reduce((pre, item) => pre + item.moneys, 0)} 金币{" "}
            {"   "}
            {mxlist.reduce((pre, item) => pre + item.coins, 0)} BNX (你的余额:
            {gold} 金币 {bnx} BNX)
          </p>
          <p>
            各等级次数:{" "}
            <Space>
              <Tag color="green">
                1级{" "}
                {mxlist.reduce(
                  (pre, item) => (pre + item.lv == 1 ? item.num : pre + 0),
                  0
                )}
                次
              </Tag>
              <Tag color="yellow">
                2级{" "}
                {mxlist.reduce(
                  (pre, item) => (pre + item.lv == 2 ? item.num : pre + 0),
                  0
                )}{" "}
                次
              </Tag>
              <Tag color="red">
                3级{" "}
                {mxlist.reduce(
                  (pre, item) => (pre + item.lv == 3 ? item.num : pre + 0),
                  0
                )}{" "}
                次
              </Tag>
            </Space>{" "}
          </p>
          <p style={{ marginTop: 5 }}>
            <span style={{ marginRight: 5 }}>待领取奖励:</span>
            <Space>
              <Tag color="red">
                BNX {nlogs.reduce((pre, item) => pre + item.reward_coin, 0)}
              </Tag>
              <Tag color="yellow">
                金币 {nlogs.reduce((pre, item) => pre + item.reward_money, 0)}
              </Tag>
              <Tag color="black">
                钥匙 {nlogs.reduce((pre, item) => pre + item.reward_coupon, 0)}
              </Tag>
            </Space>
          </p>
          {gameLoadSpin ? (
            <div
              style={{
                marginTop: 20,
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              冒险中,请不要关闭网页 <Spin style={{ marginLeft: 10 }} />
            </div>
          ) : (
            <></>
          )}
          {/* {true ? (
            <CTable
              rowKey={(record) => record.uuid}
              bordered={false}
              pagination={{ size: 5 }}
              columns={[
                {
                  title: "",
                  dataIndex: "winner",
                  render: (text) => {
                    return (
                      <img src={text == 1 ? W : F} style={{ width: 30 }} />
                    );
                  },
                },
                {
                  title: "奖励",
                  dataIndex: "jl",
                  render: (text, record) => {
                    return (
                      <Space>
                        <Tag>BNX {record.reward_coin}</Tag>
                        <Tag>金币 {record.reward_money}</Tag>
                        <Tag>钥匙 {record.reward_coupon}</Tag>
                      </Space>
                    );
                  },
                },
              ]}
              dataSource={nlogs}
              size="small"
            />
          ) : (
            <></>
          )} */}
        </div>
      </Modal>
    </BnxToolFrame>
  );
};

export default BnxTools;
