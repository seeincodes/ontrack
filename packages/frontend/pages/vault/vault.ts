import Triangle from "triangle";

function Vault() {
    const triangle = new Triangle(process.env.TRIANGLE_KEY);

    const vault = await triangle.vaults.create({
        name: "Ontrack Wallet",
    });

    const ethereumWallet = await triangle.wallets.create({
        name: vault.name,
        network: "ethereum_goerli",
        vault: vault.id,
    });

    const polygonWallet = await triangle.wallets.create({
        name: vault.name,
        network: "polygon_mumbai",
        vault: vault.id,
    });

    const optimismWallet = await triangle.wallets.create({
        name: vault.name,
        network: "optimism_goerli",
        vault: vault.id,
    });

    const vaults = await triangle.vaults.list();


    return (
        <div>Vault < /div>
        div

    )
}

export default Vault;