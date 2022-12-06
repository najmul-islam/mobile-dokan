import React from "react";
import { Row, Col, Image, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetSingleMobileQuery } from "../../redux/api/mobileApi";
import Devider from "../helpers/Devider";

const SingleMobile = () => {
  const { mobileslug } = useParams();
  const { data, isLoading, isError, error } = useGetSingleMobileQuery(
    mobileslug
  );
  console.log(data);
  if (isLoading) return <h5>Loading...</h5>;
  if (isError) return <h5>{error.error}</h5>;

  const {
    name,
    price,
    model,
    image,
    first_release,
    colors,
    conn_network,
    conn_sim,
    conn_wlan,
    conn_bluetooth,
    conn_gps,
    conn_radio,
    conn_usb,
    conn_otg,
    conn_usb_type_c,
    conn_nfc,
    body_style,
    body_material,
    body_water_resistance,
    body_dimensions,
    body_weight,
    display_size,
    display_resolution,
    display_technology,
    display_protection,
    display_features,
    backcam_resolution,
    backcam_features,
    backcam_video_recording,
    frontcam_resolution,
    frontcam_features,
    frontcam_video_recording,
    battery_type_and_capacity,
    battery_fast_charging,
    battery_wireless_charging,
    perf_operating_system,
    perf_chipset,
    perf_ram,
    perf_processor,
    perf_gpu,
    storage_rom,
    stroage_microsd_slot,
    storage_external_slot,
    sound_35mm_jack,
    sound_features,
    sec_fingerprint,
    sec_face_unlock,
    notification_light,
    sensors,
    other_features,
    manufactured_by,
    sar_value,
  } = data;
  return (
    <>
      <Row className="pt-5">
        <Col className="pt-3">
          <h1 className="text-center fw-bold">
            {isLoading ? "Loading..." : name}
          </h1>
        </Col>
      </Row>
      <Devider width={3} />
      <Row className="justify-content-center">
        <Col xs="auto">
          <h2 className="text-center fw-semibold py-2">Price in Bangladesh</h2>
          <Table bordered>
            <tbody>
              <tr>
                <td className="text-end fw-semibold">Official ✭</td>
                <td
                  className="text-start"
                  dangerouslySetInnerHTML={{ __html: price }}
                />
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          <Image
            className="mx-auto d-block"
            fluid
            src={`/mobiles/${image}`}
          ></Image>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <h2 className="text-center fw-semibold py-2">
          {name} Full Specifications
        </h2>

        <Col xs="auto" className="">
          <Table striped bordered style={{ fontSize: "15px" }}>
            <tbody>
              <tr>
                <td className="fw-semibold">First Release</td>
                <td>{first_release}</td>
              </tr>
              <tr>
                <td className="fw-semibold">Colors</td>
                <td>{colors}</td>
              </tr>
              <tr>
                <td colSpan={2} className="fw-semibold table-primary">
                  Connectivity
                </td>
              </tr>

              <tr>
                <td>Network</td>
                <td>{conn_network}</td>
              </tr>

              <tr>
                <td>SIM</td>
                <td>{conn_sim}</td>
              </tr>

              <tr>
                <td>WLAN</td>
                <td>{conn_wlan}</td>
              </tr>
              <tr>
                <td>Bluetooth</td>
                <td>{conn_bluetooth}</td>
              </tr>
              <tr>
                <td>GPS</td>
                <td>{conn_gps}</td>
              </tr>
              <tr>
                <td>Radio</td>
                <td>{conn_radio}</td>
              </tr>
              <tr>
                <td>USB</td>
                <td>{conn_usb}</td>
              </tr>
              <tr>
                <td>OTG</td>
                <td>{conn_otg}</td>
              </tr>
              <tr>
                <td>USB Type-C</td>
                <td>{conn_usb_type_c}</td>
              </tr>
              <tr>
                <td>NFC</td>
                <td>{conn_nfc}</td>
              </tr>
              <tr>
                <td colSpan={2} className="fw-semibold table-primary">
                  Body
                </td>
              </tr>
              <tr>
                <td>Style</td>
                <td>{body_style}</td>
              </tr>
              <tr>
                <td>Material</td>
                <td>{body_material}</td>
              </tr>
              <tr>
                <td>Water Resistance</td>
                <td>{body_water_resistance}</td>
              </tr>
              <tr>
                <td>Dimensions</td>
                <td>{body_dimensions}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{body_weight}</td>
              </tr>
              <tr>
                <td colSpan={2} className="fw-semibold table-primary">
                  Display
                </td>
              </tr>
              <tr>
                <td>Size</td>
                <td>{display_size}</td>
              </tr>
              <tr>
                <td>Resolution</td>
                <td>{display_resolution}</td>
              </tr>
              <tr>
                <td>Technology</td>
                <td>{display_technology}</td>
              </tr>
              <tr>
                <td>Protection</td>
                <td>{display_protection}</td>
              </tr>
              <tr>
                <td>Features</td>
                <td>{display_features}</td>
              </tr>
              <tr>
                <td colSpan={2} className="fw-semibold table-primary">
                  Back Camera
                </td>
              </tr>
              <tr>
                <td>Resolution</td>
                <td>{backcam_resolution}</td>
              </tr>
              <tr>
                <td>Features</td>
                <td>{backcam_features}</td>
              </tr>
              <tr>
                <td>Video Recording</td>
                <td>{backcam_video_recording}</td>
              </tr>
              <tr>
                <td colSpan={2} className="fw-semibold table-primary">
                  Front Camera
                </td>
              </tr>
              <tr>
                <td>Resolution</td>
                <td>{frontcam_resolution}</td>
              </tr>
              <tr>
                <td>Features</td>
                <td>{frontcam_features}</td>
              </tr>
              <tr>
                <td>Video Recording</td>
                <td>{frontcam_video_recording}</td>
              </tr>
              <tr>
                <td colSpan={2} className="fw-semibold table-primary">
                  Battery
                </td>
              </tr>
              <tr>
                <td>Type and Capacity</td>
                <td>{battery_type_and_capacity}</td>
              </tr>
              <tr>
                <td>Fast Charging</td>
                <td>{battery_fast_charging}</td>
              </tr>
              <tr>
                <td>Wireless Charging</td>
                <td>{battery_wireless_charging}</td>
              </tr>
              <tr>
                <td colSpan={2} className="fw-semibold table-primary">
                  Performance
                </td>
              </tr>
              <tr>
                <td>Operating System</td>
                <td>{perf_operating_system}</td>
              </tr>
              <tr>
                <td>Chipset</td>
                <td>{perf_chipset}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{perf_ram}</td>
              </tr>
              <tr>
                <td>Processor</td>
                <td>{perf_processor}</td>
              </tr>
              <tr>
                <td>GPU</td>
                <td>{perf_gpu}</td>
              </tr>

              <tr>
                <td colSpan={2} className="fw-semibold table-primary">
                  Storage
                </td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{storage_rom}</td>
              </tr>
              <tr>
                <td>MicroSD Slot</td>
                <td>{stroage_microsd_slot}</td>
              </tr>
              <tr>
                <td>External Slot</td>
                <td>{storage_external_slot}</td>
              </tr>
              <tr>
                <td colSpan={2} className="fw-semibold table-primary">
                  Sound
                </td>
              </tr>
              <tr>
                <td>3.5mm Jack</td>
                <td>{sound_35mm_jack}</td>
              </tr>
              <tr>
                <td>Features</td>
                <td>{sound_features}</td>
              </tr>
              <tr>
                <td colSpan={2} className="fw-semibold table-primary">
                  Security
                </td>
              </tr>
              <tr>
                <td>Fingerprint</td>
                <td>{sec_fingerprint}</td>
              </tr>
              <tr>
                <td>Face Unlock</td>
                <td>{sec_face_unlock}</td>
              </tr>
              <tr>
                <td colSpan={2} className="fw-semibold table-primary">
                  Others
                </td>
              </tr>
              <tr>
                <td>Notification Light</td>
                <td>{notification_light}</td>
              </tr>
              <tr>
                <td>Sensors</td>
                <td>{sensors}</td>
              </tr>
              <tr>
                <td>Other Features</td>
                <td dangerouslySetInnerHTML={{ __html: other_features }} />
              </tr>
              <tr>
                <td>Manufactured by</td>
                <td>{manufactured_by}</td>
              </tr>
              <tr>
                <td>Sar Value</td>
                <td>{sar_value}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default SingleMobile;
