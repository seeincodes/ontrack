import Triangle from "triangle";

export default async function Vault() {
  const triangle = new Triangle(
    "secret_OcyHR2qA1zufKSIQwCfXxGTmu3qwk08SOaWxY6EaDc"
  );

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
}
