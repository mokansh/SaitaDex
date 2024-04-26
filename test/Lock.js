

describe("Token", function () {




  it("test", async function () {
    signers = await ethers.getSigners()
    owner = signers[0]
    user1 = signers[1]
    user2 = signers[2]
    user3 = signers[3]
    user4 = signers[4]
    user5 = signers[5]
    user6 = signers[6]



    // GETINIT = await ethers.getContractFactory("CalHash");
    // getinit = await GETINIT.deploy();
    //   console.log(await getinit.getInitHash());

    TOKEN1 = await ethers.getContractFactory("Token1");
    one = await TOKEN1.deploy();

    TOKEN2 = await ethers.getContractFactory("Token2");
    two = await TOKEN2.deploy();

    UNISWAPV2FACTORY = await ethers.getContractFactory("SaitaSwapFactory");
    uniswapv2factory = await UNISWAPV2FACTORY.deploy(owner.address);

    WETH9 = await ethers.getContractFactory("WETH9");
    weth9 = await WETH9.deploy();

    console.log("aaaaa = ", uniswapv2factory.target, weth9.target)
    // UNISWAPV2ROUTER02 = await ethers.getContractFactory("SaitaSwapRouter");
    // uniswapv2router02 = await UNISWAPV2ROUTER02.deploy(uniswapv2factory.target, weth9.target);
    // console.log(uniswapv2factory.target, uniswapv2router02.target);

    // await one.approve(uniswapv2router02.target, ethers.parseEther("1000000000"));
    // await two.approve(uniswapv2router02.target, ethers.parseEther("1000000000"));
    

    // oneAmount = ethers.parseEther("1000000")
    // twoAmount = ethers.parseEther("2000")


    // await uniswapv2router02.addLiquidity(one.target, two.target, oneAmount, twoAmount, 0, 0, owner.address, 1998086504);
    // getPairAddress = await uniswapv2factory.getPair(one.target, two.target);
    // UNISWAPV2PAIR = await ethers.getContractFactory("SaitaSwapPair");
    // uniswapv2pair = await UNISWAPV2PAIR.attach(getPairAddress);
    // [reserve0, reserve1] = await uniswapv2pair.getReserves();

    // console.log(reserve0, reserve1);



    // await uniswapv2router02.connect(user1).swapExactTokensForTokensSupportingFeeOnTransferTokens(ethers.parseEther("1"), 0, [weth.target, token.target], user1.address, 1998086504);

    









  });


});