import { formatMessage as fm } from 'umi-plugin-locale'

export default function() {
  return (
    <div>{fm({ id: 'hello_world' })}</div>
  );
}
