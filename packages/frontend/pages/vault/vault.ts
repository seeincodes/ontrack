import Triangle from "triangle";

export default function Vault() {
    const triangle = new Triangle(process.env.TRIANGLE_KEY);

    const vault = await triangle.vaults.create({
        name: "Test Value",
    });

    const vaults = await triangle.vaults.list();


    return <div>Vault < /div>
}