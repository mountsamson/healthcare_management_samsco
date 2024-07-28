import SubmitButton from "@/components/SubmitButton";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";

const ClientDatabase = async () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="Logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Patient Database</p>
      </header>

      <main className="admin-main">
        <div className="flex justify-start w-full">
          <Link href="/admin">
            {/* @ts-ignore */}
            <SubmitButton>
              <GoArrowLeft className="cursor-pointer" />
              <span>Go Back</span>
            </SubmitButton>
          </Link>
          <div>
            {/* <DataTable columns={columns} data={patient.documents} /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientDatabase;
