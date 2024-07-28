import { ServerSessionConstant } from "./../../../types/game/approach/ServerSessionConstant";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ServerSessionConstantsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9337;

	public variables: Array<ServerSessionConstant>;

    public constructor()
    {
        super();
        this.variables = Array<ServerSessionConstant>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ServerSessionConstantsMessage(input);
    }

    private deserializeAs_ServerSessionConstantsMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: ServerSessionConstant;
        let _variablesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _variablesLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(ServerSessionConstant,_id1);
            _item1.deserialize(input);
            this.variables.push(_item1);
        }
    }

}