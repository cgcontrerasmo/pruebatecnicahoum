import Modal from "react-bootstrap/Modal";
import { Row, Button, Form } from "react-bootstrap";
import "./Filters.scss";
import { useState } from "react";

const Filters = ({ showModal, setShowModal, setFilers, filters }) => {
  const [auxFiltersState, setAuxFiltersState] = useState(filters);

  const handleChangeFilters = (filter, value) => {
    const auxFilter = { ...auxFiltersState };
    auxFilter[filter] = value;
    setAuxFiltersState(auxFilter);
  };

  const handleAplyFilters = () => {
    const auxFilterSend = { include_adult: auxFiltersState.include_adult };

    if (auxFiltersState.region !== "")
      auxFilterSend.region = `&region=${auxFiltersState.region}`;

    if (auxFiltersState.language !== "")
      auxFilterSend.language = `&language=${auxFiltersState.language}`;

    setFilers(auxFilterSend);
    setShowModal(false);
  };

  const ISO3166_1 = [
    { name: "Afghanistan", iso2: "AF", iso3: "AFG" },
    { name: "Albania", iso2: "AL", iso3: "ALB" },
    { name: "Germany", iso2: "DE", iso3: "DEU" },
    { name: "Andorra", iso2: "AD", iso3: "AND" },
    { name: "Angola", iso2: "AO", iso3: "AGO" },
    { name: "Anguilla", iso2: "AI", iso3: "AIA" },
    { name: "Antarctica", iso2: "AQ", iso3: "ATA" },
    { name: "Antigua and Barbuda", iso2: "AG", iso3: "ATG" },
    { name: "Saudi Arabia", iso2: "SA", iso3: "SAU" },
    { name: "Algeria", iso2: "DZ", iso3: "DZA" },
    { name: "Argentina", iso2: "AR", iso3: "ARG" },
    { name: "Armenia", iso2: "AM", iso3: "ARM" },
    { name: "Aruba", iso2: "AW", iso3: "ABW" },
    { name: "Australia", iso2: "AU", iso3: "AUS" },
    { name: "Austria", iso2: "AT", iso3: "AUT" },
    { name: "Azerbaijan", iso2: "AZ", iso3: "AZE" },
    { name: "Belgium", iso2: "BE", iso3: "BEL" },
    { name: "Bahamas", iso2: "BS", iso3: "BHS" },
    { name: "Bahrain", iso2: "BH", iso3: "BHR" },
    { name: "Bangladesh", iso2: "BD", iso3: "BGD" },
    { name: "Barbados", iso2: "BB", iso3: "BRB" },
    { name: "Belize", iso2: "BZ", iso3: "BLZ" },
    { name: "Benin", iso2: "BJ", iso3: "BEN" },
    { name: "Bhutan", iso2: "BT", iso3: "BTN" },
    { name: "Belarus", iso2: "BY", iso3: "BLR" },
    { name: "Myanmar", iso2: "MM", iso3: "MMR" },
    { name: "Bolivia", iso2: "BO", iso3: "BOL" },
    { name: "Bosnia and Herzegovina", iso2: "BA", iso3: "BIH" },
    { name: "Botswana", iso2: "BW", iso3: "BWA" },
    { name: "Brazil", iso2: "BR", iso3: "BRA" },
    { name: "Brunei", iso2: "BN", iso3: "BRN" },
    { name: "Bulgaria", iso2: "BG", iso3: "BGR" },
    { name: "Burkina Faso", iso2: "BF", iso3: "BFA" },
    { name: "Burundi", iso2: "BI", iso3: "BDI" },
    { name: "Cape Verde", iso2: "CV", iso3: "CPV" },
    { name: "Cambodia", iso2: "KH", iso3: "KHM" },
    { name: "Cameroon", iso2: "CM", iso3: "CMR" },
    { name: "Canada", iso2: "CA", iso3: "CAN" },
    { name: "Chad", iso2: "TD", iso3: "TCD" },
    { name: "Chile", iso2: "CL", iso3: "CHL" },
    { name: "China", iso2: "CN", iso3: "CHN" },
    { name: "Cyprus", iso2: "CY", iso3: "CYP" },
    { name: "Vatican City State", iso2: "VA", iso3: "VAT" },
    { name: "Colombia", iso2: "CO", iso3: "COL" },
    { name: "Comoros", iso2: "KM", iso3: "COM" },
    { name: "Republic of the Congo", iso2: "CG", iso3: "COG" },
    { name: "Democratic Republic of the Congo", iso2: "CD", iso3: "COD" },
  ];

  const Language_codes = [
    { name: "English", iso2: "en-US" },
    { name: "Arabic", iso2: "ar-AE" },
    { name: "Chinese - Simplified", iso2: "zh-CN" },
    { name: "Chinese - Traditional", iso2: "zh-TW" },
    { name: "Czech", iso2: "cs-CZ" },
    { name: "Danish", iso2: "da-DK" },
    { name: "Indonesian", iso2: "in-ID" },
    { name: "Malaysian", iso2: "ms-MY" },
    { name: "Dutch", iso2: "nl-NL" },
    { name: "French", iso2: "fr-FR" },
    { name: "Finnish", iso2: "fi-FI" },
    { name: "German", iso2: "de-DE" },
    { name: "Italian", iso2: "it-IT" },
    { name: "Japanese", iso2: "ja-JP" },
    { name: "Korean", iso2: "ko-KR" },
    { name: "Norwegian", iso2: "no-NO" },
    { name: "Polish", iso2: "pl-PL" },
    { name: "Portuguese", iso2: "pt-BR" },
    { name: "Romanian", iso2: "ro-RO" },
    { name: "Russian", iso2: "ru-RU" },
    { name: "Spanish", iso2: "es-ES" },
    { name: "Swedish", iso2: "sv-SE" },
    { name: "Thai", iso2: "th-TH" },
    { name: "Filipino", iso2: "tl-PH" },
    { name: "Turkish", iso2: "tr-TR" },
  ];

  return (
    <Modal show={showModal}>
      <Modal.Header closeButton onHide={() => setShowModal(false)}>
        <Modal.Title>
          Aplica filtros para encontrar las películas que estás buscando
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <p>¿Película con clasificación para mayores de edad?</p>
          <Form.Select
            onChange={(e) => {
              handleChangeFilters("include_adult", e.target.value === "true");
            }}
            value={auxFiltersState.include_adult}
          >
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </Form.Select>
        </Row>
        <Row>
          <p>¿De qué región quierese que sea la película?</p>
          <Form.Select
            onChange={(e) => {
              handleChangeFilters("region", e.target.value);
            }}
            value={auxFiltersState.region}
          >
            {ISO3166_1.map((country) => {
              return <option value={country.iso2}>{country.name}</option>;
            })}
          </Form.Select>
        </Row>
        <Row>
          <p>¿En qué lenguaje te gustaría que estuviese la película?</p>
          <Form.Select
            onChange={(e) => {
              handleChangeFilters("language", e.target.value);
            }}
            value={auxFiltersState.language}
          >
            {Language_codes.map((language) => {
              return <option value={language.iso2}>{language.name}</option>;
            })}
          </Form.Select>
        </Row>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button
          variant="secondary"
          onClick={() => {
            setAuxFiltersState({
              region: "",
              language: "",
              include_adult: false,
            });
          }}
        >
          Borrar
        </Button>
        <Button variant="primary" onClick={handleAplyFilters}>
          Aplicar filtros
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Filters;
