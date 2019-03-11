export type User = {
  id: string;
  firstname: string;
  lastname: string;
  image_url?: string;
};

export type CareRecipient = User & {
  agency_id: string;
  gender: "male" | "female" | null;
  is_activated: boolean;
  date_of_birth: string | null;
  allergies: string | null;
  gp_name: string | null;
  gp_phone: string | null;
  pharmacy_name: string | null;
  pharmacy_street_address: string | null;
  pharmacy_post_code: string | null;
  timezone: string;
};

export type Visit = {
  id: string;
  care_recipient: CareRecipient;
};
