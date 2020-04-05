const Strings = (redis) => {
  redis.set('name', 'cong');
  redis.get('name', (er, rs) => {
    console.log('get:', rs);
  });

  redis.mset('district', '12', 'city', 'hcm');
  redis.mget('district', 'city', (er, rs) => {
    console.log('mget:', rs);
  });

  redis.incrby('address', 300);
  redis.incrby('address', 3);
  redis.get('address', (er, rs) => {
    console.log('address:', rs);
  });
};

export default Strings;
