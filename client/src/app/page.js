"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleWallet = async () => {
    const networkId = 80001; // Polygon Mumbai Testnet
    if (typeof window.ethereum !== "undefined") {
      try {
        const currentNetwork = await window.ethereum.request({
          method: "eth_chainId",
        });
        if (currentNetwork !== `0x${networkId.toString(16)}`) {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: `0x${networkId.toString(16)}` }],
            });
          } catch (error) {
            console.error("Failed to switch network:", error);
          }
        }
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        connectedAccount = account[0];
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.error("MetaMask is not installed");
    }
  };

  const redirectToForms = () => {
    router.push("/form");
  };

  const showContacts = async () => {
    router.push("/allContacts");
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{
            width: "243px",
            height: "54px",
            borderRadius: "50px",
            background: "#5447EC",
            margin: "10px",
          }}
          onClick={() => handleWallet()}
        >
          Connect Wallet
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            width: "310px",
            height: "76px",
            borderRadius: "50px",
            background: "#5447EC",
            padding: "10px",
            margin: "100px",
          }}
          onClick={() => redirectToForms()}
        >
          Add Contacts
        </button>
        <button
          style={{
            width: "310px",
            height: "76px",
            borderRadius: "50px",
            background: "#5447EC",
            margin: "100px",
          }}
          onClick={() => showContacts()}
        >
          Show Contacts
        </button>
      </div>
    </div>
  );
}
