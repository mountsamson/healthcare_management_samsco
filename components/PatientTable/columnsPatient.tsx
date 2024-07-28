import { Patient } from "@/types/appwrite.types";
import { ColumnDef } from "@tanstack/react-table";

export const patientColumns: ColumnDef<Patient>[] = [
  {
    header: "ID",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "Patient",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.patient.name}</p>
    ),
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: ({ row }) => (
      <p className="text-14-medium ">
        {row.original.patient.birthDate}.dateFormat
      </p>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <p className="text-14-medium ">{row.original.email}</p>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => <p className="text-14-medium ">{row.original.phone}</p>,
  },
  {
    accessorKey: "privacyConsent",
    header: "Privacy Consent",
    cell: ({ row }) => (
      <p className="text-14-medium ">
        {row.original.privacyConsent ? "Yes" : "No"}
      </p>
    ),
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => <p className="text-14-medium ">{row.original.gender}</p>,
  },
  {
    accessorKey: "address",
    header: "Home Address",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.address}</p>
    ),
  },
  {
    accessorKey: "occupation",
    header: "Occupation",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.occupation}</p>
    ),
  },
  {
    accessorKey: "emergencyContactName",
    header: "Emergency Contact Name",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.emergencyContactName}</p>
    ),
  },
  {
    accessorKey: "emergencyContactNumber",
    header: "Emergency Contact Number",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.emergencyContactNumber}</p>
    ),
  },
  {
    accessorKey: "allergies",
    header: "Allergies",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.allergies}</p>
    ),
  },
  {
    accessorKey: "currentMedication",
    header: "Current Medication",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.currentMedication}</p>
    ),
  },
  {
    accessorKey: "familyMedicalHistory",
    header: "Family Medical History",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.familyMedicalHistory}</p>
    ),
  },
  {
    accessorKey: "pastMedicalHistory",
    header: "Patient Medical History",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.pastMedicalHistory}</p>
    ),
  },
  {
    accessorKey: "identificationType",
    header: "Identification Type",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.identificationType}</p>
    ),
  },
  {
    accessorKey: "identificationNumber",
    header: "Identification Number",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.identificationNumber}</p>
    ),
  },
  {
    accessorKey: "identificationDocumentId",
    header: "identification Number",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.identificationDocumentId}</p>
    ),
  },
  {
    accessorKey: "primaryPhysician",
    header: "Primary Physician",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.primaryPhysician}</p>
    ),
  },
  {
    accessorKey: "treatmentConsent",
    header: "Treatment Consent",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.treatmentConsent}</p>
    ),
  },
  {
    accessorKey: "disclosureConsent",
    header: "Disclosure Consent",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.disclosureConsent}</p>
    ),
  },
  {
    accessorKey: "identificationDocumentUrl",
    header: "identification Document Url",
    cell: ({ row }) => (
      <p className="text-14-medium ">
        {row.original.identificationDocumentUrl}
      </p>
    ),
  },
  {
    accessorKey: "insurancePolicyNumber",
    header: "Insurance Policy Number",
    cell: ({ row }) => (
      <p className="text-14-medium ">{row.original.insurancePolicyNumber}</p>
    ),
  },
];
