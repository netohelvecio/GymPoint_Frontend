import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// VALIDAÇÃO DAS ROTAS PRIVADAS
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false; // TRUE = USUARIO LOGADO - FALSE = USUARIO NÃO LOGADO

  // CASO O USUARIO NÃO ESTIVER LOGADO É REDIRECIONADO PARA PAGINA DE LOGIN
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} component={Component} />;
}

// VALIDAÇÃO DAS PROPS
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
