import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Modal } from "../../react-components/modal/Modal";
// import { TokensContainer } from "./TokensContainer";
import styles from "./Tokens.scss";
import styleUtils from "../styles/style-utils.scss";
import { Button } from "../input/Button";
import { Row } from "../layout/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { Column } from "../layout/Column";

export function RevokeTokenModal({ onClose, revoke }) {
  return (
    <Modal
      title={<FormattedMessage id="revoke-token-modal.title" defaultMessage="Revoke token" />}
      beforeTitle={<FontAwesomeIcon icon={faExclamationTriangle} />}
      afterTitle={<FontAwesomeIcon icon={faTimes} onClick={onClose} />}
      disableFullscreen
      className={styles.maxWidth400}
    >
      <Column padding="sm">
        <Column className={styles.revokeDescription}>
          <p className={styleUtils.xsMarginBottom}>
            <FormattedMessage
              id="revoke-token-modal.description1"
              defaultMessage="Are you sure you want to revoke this token?"
            />
          </p>
          <p>
            <FormattedMessage
              id="revoke-token-modal.description2"
              defaultMessage="Any scripts or requests relying on this token will lose access."
            />
          </p>
        </Column>
        <Row padding="sm" className={styles.revokeWarning}>
          <p>
            <FormattedMessage id="revoke-token-modal.revoke-warning-1" defaultMessage="This action is" />{" "}
            <b>
              <FormattedMessage id="revoke-token-modal.revoke-warning-2" defaultMessage="permanent" />
            </b>{" "}
            <FormattedMessage id="revoke-token-modal.revoke-warning-3" defaultMessage="and" />{" "}
            <b>
              <FormattedMessage id="revoke-token-modal.revoke-warning-4" defaultMessage="can not be undone." />
            </b>
          </p>
        </Row>
        <Row spaceBetween padding="sm">
          <Button preset="basic" sm onClick={onClose}>
            <FormattedMessage id="revoke-token-modal.cancel" defaultMessage="Cancel" />
          </Button>
          <Button preset="accent1" sm onClick={revoke}>
            <FormattedMessage id="revoke-token-modal.revoke" defaultMessage="Revoke" />
          </Button>
        </Row>
      </Column>
    </Modal>
  );
}

RevokeTokenModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  revoke: PropTypes.func.isRequired
};
