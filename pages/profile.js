"use client";
import ProfileModal from "../components/dashboard/profilemodal";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Profile() {
  return (
    <>
      <ConnectButton label="CONNECT" />
      <ProfileModal />
    </>
  );
}
