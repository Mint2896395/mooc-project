export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          category: string | null;
          code: string | null;
          created_at: string;
          id: string;
          name: string | null;
          seat: string | null;
          src: string | null;
          status: string | null;
          updated_at: string;
          user_id: string;
          vdo_url: string | null;
        };
        Insert: {
          category?: string | null;
          code?: string | null;
          created_at?: string;
          id: string;
          name?: string | null;
          seat?: string | null;
          src?: string | null;
          status?: string | null;
          updated_at?: string;
          user_id: string;
          vdo_url?: string | null;
        };
        Update: {
          category?: string | null;
          code?: string | null;
          created_at?: string;
          id?: string;
          name?: string | null;
          seat?: string | null;
          src?: string | null;
          status?: string | null;
          updated_at?: string;
          user_id?: string;
          vdo_url?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "courses_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      profiles: {
        Row: {
          full_name: string | null;
          id: string;
          updated_at: string | null;
          username: string | null;
        };
        Insert: {
          full_name?: string | null;
          id: string;
          updated_at?: string | null;
          username?: string | null;
        };
        Update: {
          full_name?: string | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
