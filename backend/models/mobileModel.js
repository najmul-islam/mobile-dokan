const mongoose = require("mongoose");

const mobileSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Brand",
    },
    slug: {
      type: String,
    },
    model: {
      type: String,
    },
    image: { type: String },
    amounts: [
      {
        price: { type: Number },
        variant: { type: String },
      },
    ],
    first_release: {
      type: String,
    },
    colors: {
      type: String,
    },
    conn_network: {
      type: String,
    },
    conn_sim: {
      type: String,
    },
    conn_wlan: {
      type: String,
    },
    conn_bluetooth: {
      type: String,
    },
    conn_gps: {
      type: String,
    },
    conn_radio: {
      type: String,
    },
    conn_usb: {
      type: String,
    },
    conn_otg: {
      type: String,
    },
    conn_usb_type_c: {
      type: String,
    },
    conn_nfc: {
      type: String,
    },
    body_style: {
      type: String,
    },
    body_material: {
      type: String,
    },
    body_water_resistance: {
      type: String,
    },
    body_dimensions: {
      type: String,
    },
    body_weight: {
      type: String,
    },
    display_size: {
      type: String,
    },
    display_resolution: {
      type: String,
    },
    display_technology: {
      type: String,
    },
    display_protection: {
      type: String,
    },
    display_features: {
      type: String,
    },
    backcam_resolution: {
      type: String,
    },
    backcam_features: {
      type: String,
    },
    backcam_video_recording: {
      type: String,
    },
    frontcam_resolution: {
      type: String,
    },
    frontcam_features: {
      type: String,
    },
    frontcam_video_recording: {
      type: String,
    },
    battery_type_and_capacity: {
      type: String,
    },
    battery_fast_charging: {
      type: String,
    },
    battery_wireless_charging: {
      type: String,
    },
    perf_operating_system: {
      type: String,
    },
    perf_chipset: {
      type: String,
    },
    perf_ram: {
      type: String,
    },
    perf_processor: {
      type: String,
    },
    perf_gpu: {
      type: String,
    },
    storage_rom: {
      type: String,
    },
    storage_microsd_slot: {
      type: String,
    },
    storage_external_slot: {
      type: String,
    },
    sound_35mm_jack: {
      type: String,
    },
    sound_features: {
      type: String,
    },
    sec_fingerprint: {
      type: String,
    },
    sec_face_unlock: {
      type: String,
    },
    notification_light: {
      type: String,
    },
    sensors: {
      type: String,
    },
    other_features: {
      type: String,
    },
    manufactured_by: {
      type: String,
    },
    made_in: {
      type: String,
    },
    sar_value: {
      type: String,
    },
    highlights: {
      type: String,
    },
    pros: [
      {
        type: String,
      },
    ],
    cons: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mobile", mobileSchema);
