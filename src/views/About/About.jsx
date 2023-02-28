import React from "react";
import style from "./About.module.css";
// import faVite from '../../assets/faVite.png'
// import faFireBase from '../../assets/'

export default function About(props) {
  return (
    <div className={style.container}>
      <h1>Acerca de Psiconnect</h1>
      <div className={style.content}>
      <p>
Psiconnect es un proyecto final de la carrera Desarrollo Web Full-Stack que ofrece <a href='https://www.soyhenry.com'>SoyHenry</a>, realizado por ocho alumnos del cohorte 32b. El mismo fue propuesto por uno de los participanttes que, además de ser desarrollador, también ejerce como psicólogo, lo cual nos ayudó a llevar adelande esta app de la manera más profesional posible. </p>
<p>
        El objetivo de la misma es proporcionar atención en un área de la
        salud tan importante como lo es la <b>salud mental</b>. A partir de
        esto, nos centramos cien por ciento en la experiencia del usuario para
        que no sólo le sea fácil navegar por la aplicación sino que también
        reciba una atención que no encontrará en ninguna otra. Además de eso,
        también proporcionamos la mejor experiencia para aquel profesional que
        quisiera unirse al staff, brindándole amplias herramientas para
        desenvolverse en su ámbito laboral. Algunas de las facilidades que le
        proveemos son:
      </p>
      <p>
        ◼Acceso a un panel administrativo donde podrá actualizar sus datos,
        establecer sus horarios de trabajo y visualizar todo el historial de
        citas y transacciones para llevar a cabo un mejor manejo de sus
        pacientes.
      </p>
      <p>
        ◼Posibilidad de charlar con un paciente antes de concretar una cita para
        generar confianza.
      </p>
      <p>
        ◼Seguridad en el pago de las consultas ya que éste se efectúa al momento
        de reservar.
      </p>
      <p>
        En lo que respecta del usuario como paciente, le proporcionamos una
        vista de profesionales filtrados por áreas, las cuales están pensadas
        como problemáticas cotidianas a tratar en terapia. Esto puede facilitar
        la elección del usuario dependiendo de las sensaciones y sentimientos
        presentes en el momento, como puede ser ansiedad, problemas de
        autoestima, depresión, etc. También contamos con un sistema de
        calificación que habilita al usuario a dejar un comentario y puntuar al
        profesional luego de la cita. Esto ayuda, tanto al profesional para su
        posicionamiento, como a los nuevos usuarios para agilizar su búsqueda.
      </p>
</div>
      <div className={style.containerTechs}>
        <h3 className={style.title}>Tecnologías utilizadas</h3>
        <div className={style.containerAllIcons}>
          <div className={style.iconContainer}>
            <svg width="48px" height="48px">
              <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
              <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
              <path
                fill="#FFF"
                d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
              />
              <path
                fill="#EEE"
                d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
              />
            </svg>
            <p>HTML5</p>
          </div>
          <div className={style.iconContainer}>
            <svg width="48px" height="48px">
              <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
              <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
              <path
                fill="#FFF"
                d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
              />
              <path
                fill="#EEE"
                d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
              />
            </svg>
            <p>CSS3</p>
          </div>
          <div className={style.iconContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48px"
              height="48px"
              viewBox="0 0 410 404"
              fill="none"
            >
              <path
                d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
                fill="url(#paint1_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="6.00017"
                  y1="32.9999"
                  x2="235"
                  y2="344"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#41D1FF" />
                  <stop offset="1" stop-color="#BD34FE" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="194.651"
                  y1="8.81818"
                  x2="236.076"
                  y2="292.989"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFEA83" />
                  <stop offset="0.0833333" stop-color="#FFDD35" />
                  <stop offset="1" stop-color="#FFA800" />
                </linearGradient>
              </defs>
            </svg>
            <p>Vite</p>
          </div>
          <div className={style.iconContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--logos"
              width="48px"
              height="48px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 256 228"
            >
              <path
                fill="#00D8FF"
                d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"
              ></path>
            </svg>
            <p>React</p>
          </div>
          <div className={style.iconContainer}>
            <svg width="48px" height="48px">
              <path
                fill="#7e57c2"
                d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"
              />
              <path
                fill="#7e57c2"
                d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"
              />
              <path
                fill="#7e57c2"
                d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"
              />
            </svg>
            <p>Redux</p>
          </div>
          <div className={style.iconContainer}>
            <svg width="48px" height="48px" viewBox="0 0 2249 2249">
              <path
                d="m1068.3 1214.8v-292.4l-253.2-146.1-253.2 146.1v292.4l253.2 146.2z"
                fill="#2E7D32"
              />
              <path
                d="m2065.4 1170.4 165 95.3-165 95.3-253.2-146.2v-292.3l253.2-146.2 153.4 88.6c15.6 65.8 25.1 132.9 28.6 200.5l-93.8 54.2v-101.8l-88.2-50.9-88.2 50.9v101.8z"
                fill="#37474F"
              />
              <path
                d="m2114.6 1097v-56.8l-49.1-28.4-49.2 28.4v56.8l49.2 28.4z"
                fill="#4CAF50"
              />
              <path
                d="m442.3 922.5v385.5l-168.9-96.3v-197.7l-84.3-48.7-84.3 48.7v197.6l-95.9 54.7c-5.9-47-8.9-94.4-8.9-141.8 0-88 10.1-173.7 29.2-255.9l159.9-92.3z"
                fill="#37474F"
              />
              <path
                d="m815 776.2 253.2 438.5-253.2 146.2-253.1-438.5z"
                fill="#4CAF50"
              />
              <path d="m561.9 1214.8 86.9-141.8-86.9-150.6z" fill="#388E3C" />
              <path d="m983.8 1068.6 84.4-146.2-253.1-146.1z" fill="#388E3C" />
              <path
                d="m1522.3 437.4v387.9l-84.9-49-253.2 146.2v292.4l253.2 146.2 253.2-146.2v-687.4zm-.5 679.9-84.4 48.7-84.4-48.7v-97.4l84.4-48.7 84.4 48.7z"
                fill="#37474F"
              />
              <g fill="#4CAF50">
                <path d="m1239.4 1575.7s-5-42.7-50.7-42.7-77 6-77 31.3 88.9 25.3 122.7 35.3c33.8 9.9 63.6 35.8 48.7 81.5s-60.6 50.7-131.2 50.7-86.5-58.6-86.5-81.5h39.8s-5 35.8 41.7 41.7 91.4 9.3 97.4-26.8c8-47.7-151.1-23.9-165-70.6-11.8-39.5-5-91.4 74.5-99.4s123.2 27.2 123.2 79.5z" />
                <path d="m855.3 1762 87.9 50.7c44.2 25.5 99.4-6.4 99.4-57.4v-252.6h-35.8v242.6c0 27.8-30.1 45.3-54.3 31.3l-61.3-35.4v-258.9l224.2-129.4 224.2 129.4v258.9l-224.2 129.4-64.6-37.3-42.2 17 106.8 61.6 260-150.1v-300.2l-260-150.1-260 150.1z" />
              </g>
            </svg>
            <p>NodeJS</p>
          </div>
          <div className={style.iconContainer}>
            <svg width="120" height="40">
              <path
                fill="#fff"
                d="M40 41.753V18.708h1.25v3.625a4.74 4.74 0 0 0 .408-.511c1.044-2.166 3.246-3.533 5.65-3.506 2.85-.085 5.166.97 6.527 3.506a11.27 11.27 0 0 1 .272 10.331c-1.268 2.842-4.4 4.255-7.753 3.736a6.27 6.27 0 0 1-5.004-3.302v9.165zm1.25-14.893l.28 2.706c.494 3.08 2.315 4.9 5.174 5.242a5.88 5.88 0 0 0 6.459-3.736c1.112-2.65 1.03-5.65-.22-8.238a5.76 5.76 0 0 0-6.068-3.353 5.61 5.61 0 0 0-5.012 4.144 28.62 28.62 0 0 0-.613 3.234zm39.498 3.132a6.74 6.74 0 0 1-6.587 5.957c-5.242.264-7.702-3.217-8.093-7.234a11.59 11.59 0 0 1 1.021-6.383 7.12 7.12 0 0 1 7.412-3.974 6.81 6.81 0 0 1 6.042 5.183 34.97 34.97 0 0 1 .587 3.83H67.363c-.255 3.642 1.702 6.57 4.476 7.276 3.455.85 6.408-.647 7.48-3.932.238-.843.672-.962 1.438-.723zm-13.395-3.787h12.314c-.077-3.88-2.493-6.7-5.77-6.732-3.7-.06-6.383 2.647-6.544 6.732zm15.94 3.872H84.5a4.84 4.84 0 0 0 2.842 4.17 7.43 7.43 0 0 0 6.451-.17 2.9 2.9 0 0 0 1.702-2.851 2.63 2.63 0 0 0-1.77-2.63c-1.328-.494-2.74-.766-4.093-1.2a30 30 0 0 1-4.119-1.506c-2.18-1.064-2.315-5.208.153-6.52a8.69 8.69 0 0 1 8.306-.128c1.594.88 2.475 2.657 2.213 4.46H95.15c0-.05-.094-.094-.094-.145-.128-3.3-2.902-4.332-5.88-4.042-.9.1-1.753.372-2.553.774a2.55 2.55 0 0 0-1.48 2.553 2.55 2.55 0 0 0 1.702 2.4c1.3.477 2.68.783 4.025 1.157l3.25.85a3.84 3.84 0 0 1 2.638 3.464c.26 1.745-.63 3.46-2.204 4.255-2.842 1.608-7.523 1.183-9.608-.85-1.067-1.073-1.662-2.53-1.65-4.042zm28.78-6.374h-1.132c0-.153-.06-.3-.077-.417a3.7 3.7 0 0 0-3.013-3.557 7.43 7.43 0 0 0-4.774.23 2.9 2.9 0 0 0-2.102 2.766 2.67 2.67 0 0 0 2.042 2.689l5.174 1.328a14.39 14.39 0 0 1 1.65.502c1.65.6 2.77 2.132 2.82 3.883a4.25 4.25 0 0 1-2.6 4.04 9.47 9.47 0 0 1-7.659.077 5.31 5.31 0 0 1-3.2-5.157h1.106c.416 2.005 1.793 3.675 3.682 4.465s4.046.596 5.764-.516a3.04 3.04 0 0 0 1.634-2.842 2.63 2.63 0 0 0-1.796-2.613c-1.328-.494-2.74-.757-4.093-1.2a30.15 30.15 0 0 1-4.144-1.489c-2.128-1.047-2.298-5.157.128-6.468a8.57 8.57 0 0 1 8.442-.094 4.45 4.45 0 0 1 2.136 4.366zm-74.13 11.83a1.95 1.95 0 0 1-2.417-.919l-4.4-6.085-.638-.85-5.106 6.944a1.87 1.87 0 0 1-2.298.902l6.578-8.825-6.12-7.974c.908-.328 1.92.028 2.425.85l4.56 6.16 4.587-6.136a1.83 1.83 0 0 1 2.281-.851L35.02 21.9l-3.217 4.187a.85.85 0 0 0 0 1.268l6.127 8.178zm27.93-16.892v1.2a6.17 6.17 0 0 0-6.57 6.374q0 4.204 0 8.408v.953h-1.217v-16.86h1.2v3.455c1.472-2.52 3.744-3.455 6.595-3.523zM7.333 26.59l.536-2.647c1.472-5.234 7.472-7.412 11.6-4.17 2.417 1.898 3.02 4.587 2.902 7.617H8.754c-.22 5.412 3.685 8.68 8.68 7.012 1.646-.6 2.885-1.968 3.293-3.668.264-.85.7-.996 1.498-.75a6.91 6.91 0 0 1-3.302 5.047 8 8 0 0 1-9.319-1.191c-1.216-1.367-1.95-3.095-2.093-4.92 0-.3-.1-.58-.17-.85q-.01-.757-.01-1.48zm1.438-.366h12.314c-.077-3.923-2.553-6.706-5.855-6.732-3.676-.05-6.306 2.672-6.468 6.715z"
              />
            </svg>
            <p>ExpressJS</p>
          </div>
          <div className={style.iconContainer}>
            <svg width="120" height="60">
              <style></style>
              <path
                fill="#2f406a"
                d="M31.554 23.517v12.9L20.59 42.855l-.1.092v4.866l.1.092 15.435-8.916V21.01h-.147l-4.352 2.433v.1"
                className="D"
              />
              <path
                d="M9.59 36.52L20.61 42.9v5.004L5.046 38.952V21.048h.156l4.343 2.525.046.147v12.855"
                fill="#2379bd"
                className="E"
              />
              <path
                d="M9.59 23.692L5 21.048l15.554-8.952 15.472 8.916-4.472 2.507-11.018-6.27-10.963 6.427"
                fill="#03afef"
                className="F"
              />
              <path
                d="M20.398 35.04l-.12-.12v-4.84l.12-.064v-.12l4.15-2.424h.13v4.995l-4.306 2.553"
                fill="#2f406a"
                className="D"
              />
              <path
                d="M16.018 32.654v-5.188h.12l4.224 2.46v5.124l-4.38-2.397"
                fill="#2379bd"
                className="E"
              />
              <path
                d="M20.325 24.922l-4.306 2.553L20.398 30l4.306-2.516-4.38-2.59"
                fill="#03afef"
                className="F"
              />
              <path
                d="M15.036 38.21l-.12-.12V33.24l.12-.064v-.12l4.15-2.424h.13v4.995l-4.306 2.553"
                fill="#2f406a"
                className="D"
              />
              <path
                d="M10.656 35.812v-5.188h.12L15 33.085v5.124l-4.343-2.397"
                fill="#2379bd"
                className="E"
              />
              <path
                d="M14.972 28.08l-4.316 2.543 4.38 2.553 4.306-2.516-4.38-2.59"
                fill="#03afef"
                className="F"
              />
              <path
                d="M26.146 38.328l-.12-.12V33.36l.12-.064v-.12l4.15-2.424h.13v4.995L26.12 38.3"
                fill="#2f406a"
                className="D"
              />
              <path
                d="M21.766 35.932v-5.188h.138l4.224 2.46v5.124l-4.38-2.397"
                fill="#2379bd"
                className="E"
              />
              <path
                d="M26.073 28.164l-4.306 2.553 4.38 2.553 4.306-2.516-4.38-2.59"
                fill="#03afef"
                className="F"
              />
              <path
                d="M20.784 41.487l-.12-.12V36.52l.12-.064v-.12l4.15-2.424h.13v4.995l-4.306 2.553"
                fill="#2f406a"
                className="D"
              />
              <path
                d="M16.395 39.1v-5.18h.12l4.224 2.46v5.124L16.395 39.1"
                fill="#2379bd"
                className="E"
              />
              <path
                d="M20.7 31.36l-4.316 2.553 4.39 2.516 4.306-2.516-4.38-2.553"
                fill="#03afef"
                className="F"
              />
              <path
                d="M20.398 28.164l-.12-.12v-4.83l.12-.064v-.12l4.15-2.424h.13v4.995l-4.28 2.562"
                fill="#2f406a"
                className="D"
              />
              <path
                d="M16.018 25.785v-5.188h.12l4.224 2.46v5.105l-4.38-2.397"
                fill="#2379bd"
                className="E"
              />
              <path
                d="M20.325 18.063l-4.306 2.553 4.38 2.553 4.306-2.516-4.38-2.59"
                fill="#03afef"
                className="F"
              />
              <path
                d="M15.036 31.33l-.12-.12v-4.885l.12-.064v-.12l4.15-2.424h.13v4.995l-4.306 2.553"
                fill="#2f406a"
                className="D"
              />
              <path
                d="M10.656 28.944v-5.188h.12L15 26.217v5.124l-4.343-2.397"
                fill="#2379bd"
                className="E"
              />
              <path
                d="M14.972 21.213l-4.316 2.543 4.38 2.57 4.306-2.516-4.38-2.59"
                fill="#03afef"
                className="F"
              />
              <path
                d="M26.146 31.45l-.12-.12v-4.84l.12-.064v-.12l4.15-2.424h.13v4.995l-4.306 2.553"
                fill="#2f406a"
                className="D"
              />
              <path
                d="M21.766 29.082v-5.206h.138l4.205 2.452v5.124l-4.343-2.37"
                fill="#2379bd"
                className="E"
              />
              <path
                d="M26.073 21.332l-4.306 2.553 4.38 2.553 4.306-2.516-4.38-2.59"
                fill="#03afef"
                className="F"
              />
              <path
                d="M20.784 34.59l-.12-.12v-4.82l.12-.064v-.12l4.15-2.424h.13v4.995l-4.28 2.553"
                fill="#2f406a"
                className="D"
              />
              <path
                d="M16.395 32.222v-5.188h.12l4.224 2.46v5.096l-4.343-2.37"
                fill="#2379bd"
                className="E"
              />
              <path
                d="M20.7 24.49l-4.316 2.543 4.38 2.553 4.306-2.516-4.37-2.58"
                fill="#03afef"
                className="F"
              />
              <path
                d="M43.776 23.17q-2.892 0-2.892 2.176c-.086.634.165 1.267.66 1.67a8.87 8.87 0 0 0 2.7.918 6.86 6.86 0 0 1 2.883 1.148 2.98 2.98 0 0 1 .845 2.378q0 4.104-4.26 4.104a23.96 23.96 0 0 1-3.526-.33l-.698-.092.156-1.23c1.323.197 2.657.314 3.994.35q2.856 0 2.856-2.68a1.84 1.84 0 0 0-.624-1.58 6.14 6.14 0 0 0-2.34-.8c-1.146-.173-2.24-.596-3.205-1.24-.702-.655-1.06-1.597-.973-2.553q0-3.6 4.297-3.6c1.132.014 2.26.1 3.38.285l.652.1-.064 1.285a36.25 36.25 0 0 0-3.838-.321zM56.85 34.215l.56-.055v1.14a27.74 27.74 0 0 1-3.765.312 3.39 3.39 0 0 1-2.947-1.203c-.666-1.13-.97-2.438-.872-3.746q0-5.068 4.03-5.068a3.67 3.67 0 0 1 2.938 1.074 5.08 5.08 0 0 1 .964 3.425l-.046 1.093H51.33a3.97 3.97 0 0 0 .578 2.37 2.37 2.37 0 0 0 2.011.771q1.442 0 2.93-.1zM56.327 30c.078-.875-.12-1.75-.57-2.507-.46-.522-1.142-.795-1.836-.735a2.37 2.37 0 0 0-1.928.771 3.91 3.91 0 0 0-.707 2.47zm6.896 5.6a3.23 3.23 0 0 1-2.755-1.139 6.7 6.7 0 0 1-.836-3.856c-.127-1.37.227-2.74 1-3.875q1-1.157 3.544-1.157l3.223.193v13.92h-1.423v-4.72c-.86.416-1.8.633-2.755.634zm.918-8.778c-.92-.115-1.84.228-2.46.918a5.04 5.04 0 0 0-.643 2.883 5.64 5.64 0 0 0 .533 2.837 1.93 1.93 0 0 0 1.781.854c.76-.001 1.514-.145 2.222-.422l.35-.138V26.94q-1.166-.1-1.78-.1zm12.047-1.055h1.45v9.64h-1.45v-.67a5.51 5.51 0 0 1-2.865.863q-1.965 0-2.617-1.02c-.53-1.186-.75-2.488-.643-3.783v-5.032h1.423v5.013a7.09 7.09 0 0 0 .367 2.819q.367.716 1.662.716c.438-.002.874-.063 1.295-.184a6.01 6.01 0 0 0 1-.358l.35-.174zm10.78 8.448l.56-.055v1.14a27.74 27.74 0 0 1-3.765.312 3.39 3.39 0 0 1-2.947-1.203c-.666-1.13-.97-2.438-.872-3.746q0-5.068 4.03-5.068c1.084-.085 2.15.315 2.9 1.093a5.08 5.08 0 0 1 .964 3.425l-.073 1.102H81.45a3.97 3.97 0 0 0 .578 2.37 2.37 2.37 0 0 0 2.011.771q1.442-.028 2.93-.138zM86.445 30c.078-.875-.12-1.75-.57-2.507-.46-.522-1.142-.795-1.836-.735a2.37 2.37 0 0 0-1.928.771 3.89 3.89 0 0 0-.68 2.47zm3.82 5.408V21.562h1.423v13.846zm4.333-11.835V21.9h1.442v1.662zm0 11.817v-9.623h1.442v9.64zm3.645-8.328v-1.295h7.153v1.295l-5.4 7.06h5.4v1.295h-7.153v-1.304l5.38-7.052zm15.857 7.153l.56-.055v1.14a27.74 27.74 0 0 1-3.765.312 3.39 3.39 0 0 1-2.947-1.203c-.666-1.13-.97-2.438-.872-3.746q0-5.068 4.03-5.068c1.084-.085 2.15.315 2.9 1.093a5.08 5.08 0 0 1 .964 3.425l-.073 1.102h-6.326a3.97 3.97 0 0 0 .578 2.37 2.37 2.37 0 0 0 2.011.771q1.442-.028 2.93-.138zM113.577 30c.078-.875-.12-1.75-.57-2.507-.46-.522-1.142-.795-1.836-.735a2.37 2.37 0 0 0-1.928.771c-.492.725-.725 1.596-.66 2.47z"
                fill="#2f406a"
                className="D"
              />
            </svg>
            <p>Sequelize</p>
          </div>
          <div className={style.iconContainer}>
            <svg
              width="60"
              height="60"
              viewBox="0 0 256 264"
              preserveAspectRatio="xMinYMin meet"
            >
              <path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99.087-.729.167-1.425.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351" />
              <path
                d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002"
                fill="#336791"
              />
              <path
                d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28.282.04.563.058.842.058 3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35M196.86 81.599c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863.258 0 .518-.017.78-.054 2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225"
                fill="#FFF"
              />
              <path
                d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016zM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473.313.255.656.508 1.032.756 6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772z"
                fill="#FFF"
              />
            </svg>
            <p>PostgreSQL</p>
          </div>
          <div className={style.iconContainer}>
            <svg
            height='100px'
            width='100px'
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="23 6 469 132"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="-3.49%"
                  x2="100.83%"
                  y1="17.02%"
                  y2="92.9%"
                >
                  <stop offset="0%" stop-color="#fff" stop-opacity=".1" />
                  <stop offset="14%" stop-color="#fff" stop-opacity=".08" />
                  <stop offset="61%" stop-color="#fff" stop-opacity=".02" />
                  <stop offset="100%" stop-color="#fff" stop-opacity="0" />
                </linearGradient>
                <path
                  id="b"
                  d="M106.687 35.2742c-.186-1.0977-.967-2-2.0244-2.338s-2.2148-.057-3.0002.73L86.2473 49.166l-12.12-23.1455c-.5133-.9786-1.525-1.5914-2.6273-1.5914s-2.114.6128-2.6273 1.5914l-6.6277 12.656L45.62 7.5726c-.603-1.1297-1.8588-1.746-3.118-1.5297s-2.2394 1.216-2.4335 2.4827L24 111.701l42.9727 24.1654c2.6985 1.5113 5.985 1.5113 8.6836 0L119 111.701l-12.313-76.427z"
                />
              </defs>
              <path
                opacity=".54"
                d="M163.7732 106.5176H155V38.7654h39.8442v8.324h-31.07v22.244h28.025v8.1318h-28.025v29.0525zm47.5673-58.0015c-2.0914 2.085-5.3755 2.4125-7.843.7823s-3.4307-4.764-2.3-7.4837 4.0395-4.2678 6.9472-3.6968 5.0038 3.102 5.0058 6.044c.0282 1.6386-.6298 3.2154-1.8172 4.3542h.0074zm0 58.0015h-8.7732V60.152h8.7732v46.3658zm19.2518 0h-8.7732V60.152h8.386v7.57h.3798c1.013-2.6676 2.9584-4.8847 5.4814-6.2467 2.4094-1.5352 5.196-2.3866 8.0582-2.4617 2.247-.0634 4.4835.3238 6.5762 1.1384l-3.3365 8.1317a13.355 13.355 0 0 0-4.6696-.6653c-3.217.0162-6.2788 1.3736-8.438 3.7406-2.4477 2.4937-3.6716 5.7588-3.6716 9.795l.0074 25.3637zm44.149 1.4785c-7.0553 0-12.79-2.3336-17.2038-7s-6.6233-10.554-6.6283-17.6607c-.1296-6.3986 2.167-12.612 6.4347-17.4093 4.0874-4.775 10.1338-7.455 16.444-7.29 6.9262 0 12.472 2.24 16.6377 6.7198s6.246 10.4727 6.24 17.9786l-.0968 1.6116h-36.9024c.2532 4.667 1.827 8.3634 4.7217 11.0887 2.707 2.6374 6.358 4.1 10.15 4.066 6.2907 0 10.5482-2.65 12.7725-7.947l7.82 3.2157c-1.5846 3.666-4.1984 6.802-7.5294 9.0336-3.5 2.3952-7.7876 3.5928-12.862 3.5928zm12.5863-30.3092c-.1887-2.6514-1.4125-5.1747-3.6716-7.57s-5.618-3.568-10.0765-3.5188c-3.0924-.0538-6.0964 1.0253-8.438 3.031-2.4532 2.1338-4.1698 4.978-4.908 8.1317l27.094-.074zm41.0358 30.3092c-3.3194.0653-6.6022-.6972-9.5477-2.2177-2.5867-1.295-4.7755-3.2558-6.3378-5.6774h-.3798v6.4167h-8.3933V38.7654h8.7732V60.152l-.3798 6.4315h.3798c1.5623-2.4217 3.751-4.3825 6.3378-5.6774 2.941-1.5382 6.224-2.3186 9.5477-2.2695 6.0374 0 11.2507 2.3656 15.6398 7.0968s6.581 10.5984 6.5762 17.6015-2.192 12.8703-6.5762 17.6015-9.5974 7.0845-15.6398 7.0598zm-1.43-7.947c3.9965.0315 7.8147-1.64 10.486-4.5907 2.9244-3.0605 4.3866-7.114 4.3866-12.1607s-1.4622-9.1-4.3866-12.1607c-2.702-2.9154-6.5078-4.578-10.4987-4.5865s-7.8038 1.6382-10.5182 4.542c-2.8896 3.026-4.3345 7.0943-4.3345 12.205s1.4597 9.1913 4.379 12.242c2.688 2.9397 6.5166 4.5948 10.516 4.5464l-.0298-.037zm45.981 7.947c-4.965 0-9.1108-1.4194-12.4373-4.258s-4.9948-6.5916-5.0047-11.2588c0-5.0466 1.971-9.004 5.9133-11.8724s8.803-4.3024 14.5822-4.3024c5.1487 0 9.37.9462 12.6608 2.8387V77.82c.1257-3.1165-1.1712-6.123-3.53-8.1835-2.402-2.0534-5.493-3.1376-8.6615-3.0383-2.4248-.03-4.813.5898-6.9113 1.7964-1.9657 1.0808-3.4728 2.8288-4.245 4.9234l-8.006-3.408c1.0824-2.7845 3.2124-5.367 6.4-7.7473s7.373-3.5632 12.5863-3.5484c5.958 0 10.923 1.725 14.895 5.1747s5.943 8.3387 5.9133 14.6667v28.062h-8.4157v-6.4315h-.3798c-3.5 5.2733-8.6168 7.9-15.3493 7.9zm1.43-7.947c3.6866-.0128 7.2254-1.4406 9.8754-3.9846 2.8243-2.3633 4.4585-5.84 4.4685-9.5068-2.4825-2.0206-6.2063-3.031-11.1713-3.031-4.26 0-7.47.9142-9.6296 2.7426-2.0156 1.538-3.2095 3.9082-3.2397 6.4315-.041 2.1958 1.0925 4.25 2.98 5.3965 1.984 1.324 4.327 2.0176 6.7177 1.9886v-.037zm48.5206 7.947c-5.2133 0-9.518-1.2617-12.914-3.785-3.304-2.4223-5.8792-5.694-7.4475-9.4624l7.82-3.2157c2.4825 5.8056 6.7028 8.7084 12.6608 8.7084 2.3668.0962 4.7064-.5308 6.7028-1.7964 1.6462-1.0145 2.64-2.808 2.6215-4.7312 0-3.026-2.13-5.0762-6.4-6.1506l-9.436-2.2695c-3.105-.8154-5.9977-2.2826-8.4827-4.3024-2.645-2.0476-4.1362-5.2334-4.0068-8.5605 0-4.1 1.827-7.427 5.4814-9.98 3.8225-2.6045 8.3758-3.9447 13.0108-3.8293 3.87-.0614 7.6858.906 11.052 2.8018 3.178 1.791 5.6352 4.6164 6.956 7.9987l-7.6188 3.09c-1.713-4.1-5.2728-6.1506-10.6797-6.1506-2.3-.076-4.576.482-6.5762 1.6116-1.6387.8427-2.667 2.5222-2.6662 4.3542 0 2.6514 2.0654 4.4503 6.1963 5.3965l9.2424 2.1808c4.384.9857 7.6263 2.7106 9.7265 5.1747 2.0343 2.302 3.1518 5.262 3.1428 8.324.0406 4.0824-1.868 7.943-5.1462 10.4086-3.4308 2.7894-7.8472 4.1842-13.249 4.1842zm47.1874 0c-7.0553 0-12.79-2.3336-17.2038-7S446.225 90.429 446.22 83.2978c-.1296-6.3986 2.167-12.612 6.4347-17.4093 4.1028-4.763 10.1556-7.4287 16.4665-7.252 6.95 0 12.497 2.24 16.6377 6.7198S491.98 75.829 492 83.3348l-.0968 1.6116H454.97c.2532 4.667 1.827 8.3634 4.7217 11.0887 2.7148 2.6374 6.375 4.095 10.1733 4.051 6.2907 0 10.5482-2.65 12.7725-7.947l7.82 3.2157c-1.5842 3.6662-4.198 6.8022-7.5294 9.0336-3.5 2.405-7.7926 3.6075-12.8768 3.6075zm12.5863-30.3092c-.1887-2.6514-1.4125-5.1747-3.6716-7.57s-5.613-3.568-10.0616-3.5188c-3.0923-.053-6.096 1.026-8.438 3.031-2.4532 2.1338-4.1698 4.978-4.908 8.1317l27.0792-.074z"
              />
              <path
                fill="#ffa000"
                d="M23.8333 111.7187L39.9655 8.4906c.1972-1.266 1.1818-2.264 2.445-2.4786s2.522.4028 3.126 1.5327L62.22 38.662l6.65-12.6615c.515-.979 1.5303-1.592 2.6366-1.592s2.1215.613 2.6366 1.592l45.0227 85.718H23.8333z"
              />
              <path
                fill="#f57c00"
                d="M79.566 71.5074L62.2124 38.6472l-38.379 73.0715L79.566 71.5074z"
              />
              <path
                fill="#ffca28"
                d="M119.1666 111.7187l-12.356-76.4603c-.1867-1.098-.9703-2-2.0315-2.34s-2.2226-.057-3.0107.7302l-77.935 78.069 43.1234 24.1834c2.708 1.512 6.006 1.512 8.714 0l43.4958-24.1834z"
              />
              <path
                fill="#fff"
                fill-opacity=".2"
                d="M106.8105 35.2584c-.1867-1.098-.9703-2-2.0315-2.34s-2.2226-.057-3.0107.7302L86.3 49.1562 74.1365 26c-.515-.979-1.5303-1.592-2.6366-1.592s-2.1215.613-2.6366 1.592l-6.65 12.6615L45.529 7.5447c-.605-1.1302-1.8653-1.7466-3.13-1.5304S40.153 7.231 39.958 8.498L23.8333 111.7187h-.052l.052.0596.4245.2085 77.488-77.5775c.7877-.7915 1.952-1.076 3.016-.737s1.849 1.2445 2.0338 2.3457l12.2518 75.775.1192-.0745-12.356-76.4603zm-82.8357 76.3188L39.9655 9.228c.1948-1.267 1.1784-2.2675 2.442-2.4837s2.524.4 3.13 1.5304L62.22 39.392l6.65-12.6615c.515-.979 1.5303-1.592 2.6366-1.592s2.1215.613 2.6366 1.592l11.9167 22.664-62.0858 62.1827z"
              />
              <path
                fill="#a52714"
                opacity=".2"
                d="M75.6708 135.1722c-2.708 1.512-6.006 1.512-8.714 0L23.9376 111.056l-.1043.663 43.1234 24.176c2.708 1.512 6.006 1.512 8.714 0l43.4958-24.176-.1117-.6852-43.384 24.1387z"
              />
              <use fill="url(#a)" xlink:href="#b" />
            </svg>
            <p>FireBase</p>
          </div>
        </div>
      </div>
    </div>
  );
}
