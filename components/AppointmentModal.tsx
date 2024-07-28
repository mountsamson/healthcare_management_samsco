import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { AppointmentForm } from "./forms/AppointmentForm";
import { Appointment } from "@/types/appwrite.types";
import SubmitButton from "./SubmitButton";
import { deleteAppointment } from "@/lib/actions/appointment.actions";

const AppointmentModal = ({
  type,
  patientId,
  userId,
  appointment,
}: {
  type: "schedule" | "cancel" | "delete";
  patientId: string;
  userId: string;
  appointment?: Appointment;
}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isDeleting && appointment?.$id) {
      setIsLoading(true); // Set loading state
      deleteAppointment(appointment.$id)
        .then(() => {
          setOpen(false);
        })
        .catch((error) => {
          console.error("Failed to delete appointment:", error);
        })
        .finally(() => {
          setIsDeleting(false);
          setIsLoading(false); // Reset loading state
        });
    }
  }, [isDeleting, appointment?.$id]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={`capitalize ${
            type === "schedule"
              ? "text-green-500"
              : type === "delete"
              ? "text-red-500"
              : ""
          }`}
        >
          {type}
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">{type}</DialogTitle>
          <DialogDescription>
            {type === "delete"
              ? "Are you sure you want to delete this appointment?"
              : `Please fill in the following details to ${type} the appointment details`}
          </DialogDescription>
        </DialogHeader>
        {type !== "delete" ? (
          <AppointmentForm
            userId={userId}
            patientId={patientId}
            type={type}
            appointment={appointment}
            setOpen={setOpen}
          />
        ) : (
          <SubmitButton
            isLoading={isLoading}
            className="bg-red-700"
            onClick={() => setIsDeleting(true)}
          >
            Delete
          </SubmitButton>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
