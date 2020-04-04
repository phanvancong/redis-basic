import Redis from 'ioredis';

const redis = new Redis();

redis.set('name', 'cong');
redis.get('name', (er, rs) => {
    console.log(rs);
});