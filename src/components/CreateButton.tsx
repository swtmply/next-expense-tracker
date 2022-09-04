import { useRouter } from "next/router";
import React from "react";

const CreateButton = ({
  params,
  label,
}: {
  params?: string;
  label: string;
}) => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => router.push(`/dashboard/create?type=${params}`)}
        className="px-3 py-1 bg-purple-600 rounded-md hover:bg-purple-700 text-sm capitalize text-dark-primary hidden sm:block"
      >
        <i className={`fa-solid fa-add min-w-[1rem] mr-2`}></i>
        Add {label}
      </button>
      <button
        onClick={() => router.push(`/dashboard/create?type=${params}`)}
        className="px-3 py-1 bg-purple-600 rounded-md hover:bg-purple-700 text-sm capitalize text-dark-primary sm:hidden text-center"
      >
        <i className={`fa-solid fa-add min-w-[1rem]`}></i>
      </button>
    </>
  );
};

export default CreateButton;
