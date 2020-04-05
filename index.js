import Redis from 'ioredis';
import Strings from './string';
import Hashes from './hashes';
import Lists from './lists';

const redis = new Redis();

Strings(redis);
Hashes(redis);
Lists(redis);
