/*
  # Create saved_products table

  1. New Tables
    - `saved_products`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references users.id)
      - `product_name` (text)
      - `type` (text, 'skin' or 'hair')
      - `raw_ingredients` (text)
      - `parsed_results` (jsonb)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `saved_products` table
    - Add policies for authenticated users to manage their own saved products
*/

-- Create saved_products table
CREATE TABLE IF NOT EXISTS saved_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_name text NOT NULL,
  type text NOT NULL CHECK (type IN ('skin', 'hair')),
  raw_ingredients text,
  parsed_results jsonb,
  created_at timestamptz DEFAULT now()
);

-- Create an index on user_id for faster queries
CREATE INDEX IF NOT EXISTS saved_products_user_id_idx ON saved_products(user_id);

-- Enable Row Level Security
ALTER TABLE saved_products ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own saved products"
  ON saved_products
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own saved products"
  ON saved_products
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own saved products"
  ON saved_products
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own saved products"
  ON saved_products
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);