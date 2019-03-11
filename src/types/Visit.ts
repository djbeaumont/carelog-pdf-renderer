export type Visit = {
  id: string;
  careRecipient: CareRecipient;
  start_at: string;
  end_at: string;
  actual_start_at?: string;
  actual_end_at?: string;
};

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
