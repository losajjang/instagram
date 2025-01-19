"use client";
import React from "react";
import ColorButton from "./ui/ColorButton";
import { ClientSafeProvider, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          key={name}
          onClick={() => signIn(id, { callbackUrl })}
          text={`Sign in with ${name}`}
          size="big"
          icon={<FcGoogle />}
        />
      ))}
    </>
  );
}
