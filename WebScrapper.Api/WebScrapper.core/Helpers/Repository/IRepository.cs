using System;
using System.Collections.Generic;
using WebScrapper.Core.Helpers.Application;
using WebScrapper.Core.Helpers.Domain;

namespace WebScrapper.Core.Helpers.Repository
{
    public interface IRepository<TEntity> where TEntity : IDomainEntity
    {
        Guid Add(TEntity entity);

        void Remove(TEntity entity);

        TEntity FindById(TEntity entity);

        List<TEntity> ListAll();
    }
}