@file:OptIn(ExperimentalCoroutinesApi::class)
package kritor.server

import io.grpc.Grpc
import io.grpc.InsecureServerCredentials
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.asExecutor
import kritor.auth.AuthInterceptor
import kritor.service.*
import moe.fuqiuluo.shamrock.helper.LogCenter
import kotlin.coroutines.CoroutineContext

class KritorServer(
    private val port: Int
): CoroutineScope {
    private val server = Grpc.newServerBuilderForPort(port, InsecureServerCredentials.create())
        .executor(Dispatchers.IO.asExecutor())
        .intercept(AuthInterceptor)
        .addService(Authentication)
        .addService(ContactService)
        .addService(KritorService)
        .addService(FriendService)
        .addService(GroupService)
        .addService(GroupFileService)
        .addService(MessageService)
        .addService(EventService)
        .addService(ForwardMessageService)
        .addService(WebService)
        .addService(DeveloperService)
        .build()!!

    fun start(block: Boolean = false) {
        LogCenter.log("KritorServer started at port $port.")
        server.start()

        if (block) {
            server.awaitTermination()
        }
    }

    override val coroutineContext: CoroutineContext =
        Dispatchers.IO.limitedParallelism(12)
}