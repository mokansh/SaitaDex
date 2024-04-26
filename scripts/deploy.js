// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  signers = ethers.getSigners()

  owner = signers[0]

  // TOKEN1 = await ethers.getContractFactory("MotionToken");
  // one = await TOKEN1.attach("0xBA0d8a0fe3116345752e4912F4322344C1c877Cd");
  // console.log("token one ==== ", one.target)

  // TOKEN2 = await ethers.getContractFactory("Token2");
  // two = await TOKEN2.deploy();

  // UNISWAPV2FACTORY = await ethers.getContractFactory("SaitaSwapFactory");
  // uniswapv2factory = await UNISWAPV2FACTORY.deploy("0x88416CFB7B807667C3DBC47Ec0D80a19d77365de");

  // WETH9 = await ethers.getContractFactory("WETH9");
  // weth9 = await WETH9.deploy();

  // console.log("aaaaa = ", two.target, uniswapv2factory.target, weth9.target)

  UNISWAPV2ROUTER02 = await ethers.getContractFactory("SaitaSwapRouter");
    uniswapv2router02 = await UNISWAPV2ROUTER02.attach("0x1445A124201a1eF724Db086Be3B3FF7c3f541022");
    console.log(uniswapv2router02.target);

    // await one.approve("0xF9570dCe6174Eaf8DD03Fe67d26328fF0d51AdC6", ethers.parseEther("1000000000"));
    // await two.approve("0xF9570dCe6174Eaf8DD03Fe67d26328fF0d51AdC6", ethers.parseEther("1000000000"));
// 0x1619c2Bd9186f7D84dbf0e09bb473F07A4F55D6c
    //  oneAmount = ethers.parseEther("10000")

    twoAmount = ethers.parseEther("1")
    oneAmount = ethers.parseEther("1000000")

  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", await uniswapv2router02.WETH())

    // await uniswapv2router02.addLiquidityETH(one.target, oneAmount, 0, 0, "0x88416CFB7B807667C3DBC47Ec0D80a19d77365de", 1998086504, {value: twoAmount});

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
